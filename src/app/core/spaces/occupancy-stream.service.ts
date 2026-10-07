import { Injectable, NgZone, signal } from '@angular/core';
import { Subject } from 'rxjs';
import { SPACES_ENDPOINTS } from '../../constants/api.constants';
import { OccupancyEvent, OccupancyResponse, SpaceResponse } from '../../models/parking.model';
import { AuthService } from '../../services/auth.service';
import { SpaceService } from '../../services/space.service';
import { TokenStorageService } from '../security/token-storage.service';

const RECONNECT_DELAY_MS = 5000;
const OCCUPANCY_EVENT = 'occupancy';

/**
 * Conexión en tiempo real con GET /spaces/stream (Server-Sent Events).
 *
 * Se usa fetch en lugar de EventSource porque EventSource no permite enviar
 * el header Authorization. Una única conexión por sesión alimenta a todas las
 * pantallas: dashboard, mapa de espacios y alerta global.
 */
@Injectable({ providedIn: 'root' })
export class OccupancyStreamService {
  /** Última ocupación conocida (RF-16, RF-19..22). */
  readonly occupancy = signal<OccupancyResponse | null>(null);
  readonly connected = signal(false);

  /** Cada espacio que cambia de estado, para actualizar el mapa sin recargarlo. */
  readonly spaceChanges$ = new Subject<SpaceResponse>();

  private abortController: AbortController | null = null;
  private reconnectTimer: ReturnType<typeof setTimeout> | null = null;
  private running = false;

  constructor(
    private tokenStorage: TokenStorageService,
    private authService: AuthService,
    private spaceService: SpaceService,
    private zone: NgZone
  ) {}

  start(): void {
    if (this.running) return;
    this.running = true;
    void this.connect();
  }

  stop(): void {
    this.running = false;
    this.abortController?.abort();
    this.abortController = null;
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    this.connected.set(false);
    this.occupancy.set(null);
  }

  /** Consulta puntual por HTTP, por si la pantalla se abre antes de que conecte el stream. */
  refresh(): void {
    this.spaceService.getOccupancy().subscribe({
      next: occupancy => this.occupancy.set(occupancy),
      error: () => { /* el interceptor ya gestiona 401/403 */ }
    });
  }

  private async connect(): Promise<void> {
    const token = this.tokenStorage.getAccessToken();
    if (!this.running || !token) return;

    this.abortController = new AbortController();
    try {
      const response = await fetch(SPACES_ENDPOINTS.stream, {
        headers: { Authorization: `Bearer ${token}`, Accept: 'text/event-stream' },
        signal: this.abortController.signal
      });

      if (response.status === 401) {
        // Token expirado o cuenta desactivada: mismo criterio que el interceptor
        this.zone.run(() => this.authService.clearSession());
        return;
      }
      if (!response.ok || !response.body) {
        throw new Error(`HTTP ${response.status}`);
      }

      this.connected.set(true);
      await this.readEvents(response.body);
    } catch (error) {
      if (this.abortController?.signal.aborted) return;
      console.warn('Conexión en tiempo real interrumpida', error);
    } finally {
      this.connected.set(false);
    }

    this.scheduleReconnect();
  }

  private async readEvents(body: ReadableStream<Uint8Array>): Promise<void> {
    const reader = body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { value, done } = await reader.read();
      if (done) return;

      buffer += decoder.decode(value, { stream: true }).replace(/\r\n/g, '\n');
      let separator = buffer.indexOf('\n\n');
      while (separator >= 0) {
        this.handleEvent(buffer.slice(0, separator));
        buffer = buffer.slice(separator + 2);
        separator = buffer.indexOf('\n\n');
      }
    }
  }

  /** Formato SSE: líneas "event:<nombre>" y "data:<json>". */
  private handleEvent(rawEvent: string): void {
    let eventName = 'message';
    const dataLines: string[] = [];

    for (const line of rawEvent.split('\n')) {
      if (line.startsWith('event:')) eventName = line.slice(6).trim();
      else if (line.startsWith('data:')) dataLines.push(line.slice(5).trimStart());
    }
    if (eventName !== OCCUPANCY_EVENT || !dataLines.length) return;

    const event = JSON.parse(dataLines.join('\n')) as OccupancyEvent;
    this.zone.run(() => {
      this.occupancy.set(event.occupancy);
      if (event.changedSpace) {
        this.spaceChanges$.next(event.changedSpace);
      }
    });
  }

  private scheduleReconnect(): void {
    if (!this.running) return;
    this.reconnectTimer = setTimeout(() => void this.connect(), RECONNECT_DELAY_MS);
  }
}
