import {
  AuthService
} from "./chunk-JQV24IP3.js";
import {
  HttpClient,
  HttpParams,
  NgZone,
  SPACES_ENDPOINTS,
  Subject,
  TokenStorageService,
  __async,
  signal,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-KGFZV2CR.js";

// src/app/services/space.service.ts
var SpaceService = class _SpaceService {
  constructor(http) {
    this.http = http;
  }
  /** RF-18: estado de cada espacio, ordenado por código. */
  findSpaces(filter = {}) {
    let params = new HttpParams();
    if (filter.vehicleType)
      params = params.set("vehicleType", filter.vehicleType);
    if (filter.status)
      params = params.set("status", filter.status);
    return this.http.get(SPACES_ENDPOINTS.spaces, { params });
  }
  /** RF-17: disponibilidad por tipo de vehículo. */
  findAvailability(vehicleType) {
    const params = vehicleType ? new HttpParams().set("vehicleType", vehicleType) : void 0;
    return this.http.get(SPACES_ENDPOINTS.availability, { params });
  }
  /** RF-19, RF-21, RF-22: nivel de ocupación, alerta y estado de la barrera. */
  getOccupancy() {
    return this.http.get(SPACES_ENDPOINTS.occupancy);
  }
  /** RF-16: marca un espacio como ocupado o disponible. */
  changeStatus(spaceId, status) {
    const body = { status };
    return this.http.patch(`${SPACES_ENDPOINTS.spaces}/${spaceId}/status`, body);
  }
  static {
    this.\u0275fac = function SpaceService_Factory(t) {
      return new (t || _SpaceService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SpaceService, factory: _SpaceService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/spaces/occupancy-stream.service.ts
var RECONNECT_DELAY_MS = 5e3;
var OCCUPANCY_EVENT = "occupancy";
var OccupancyStreamService = class _OccupancyStreamService {
  constructor(tokenStorage, authService, spaceService, zone) {
    this.tokenStorage = tokenStorage;
    this.authService = authService;
    this.spaceService = spaceService;
    this.zone = zone;
    this.occupancy = signal(null);
    this.connected = signal(false);
    this.spaceChanges$ = new Subject();
    this.abortController = null;
    this.reconnectTimer = null;
    this.running = false;
  }
  start() {
    if (this.running)
      return;
    this.running = true;
    void this.connect();
  }
  stop() {
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
  refresh() {
    this.spaceService.getOccupancy().subscribe({
      next: (occupancy) => this.occupancy.set(occupancy),
      error: () => {
      }
    });
  }
  connect() {
    return __async(this, null, function* () {
      const token = this.tokenStorage.getAccessToken();
      if (!this.running || !token)
        return;
      this.abortController = new AbortController();
      try {
        const response = yield fetch(SPACES_ENDPOINTS.stream, {
          headers: { Authorization: `Bearer ${token}`, Accept: "text/event-stream" },
          signal: this.abortController.signal
        });
        if (response.status === 401) {
          this.zone.run(() => this.authService.clearSession());
          return;
        }
        if (!response.ok || !response.body) {
          throw new Error(`HTTP ${response.status}`);
        }
        this.connected.set(true);
        yield this.readEvents(response.body);
      } catch (error) {
        if (this.abortController?.signal.aborted)
          return;
        console.warn("Conexi\xF3n en tiempo real interrumpida", error);
      } finally {
        this.connected.set(false);
      }
      this.scheduleReconnect();
    });
  }
  readEvents(body) {
    return __async(this, null, function* () {
      const reader = body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      while (true) {
        const { value, done } = yield reader.read();
        if (done)
          return;
        buffer += decoder.decode(value, { stream: true }).replace(/\r\n/g, "\n");
        let separator = buffer.indexOf("\n\n");
        while (separator >= 0) {
          this.handleEvent(buffer.slice(0, separator));
          buffer = buffer.slice(separator + 2);
          separator = buffer.indexOf("\n\n");
        }
      }
    });
  }
  /** Formato SSE: líneas "event:<nombre>" y "data:<json>". */
  handleEvent(rawEvent) {
    let eventName = "message";
    const dataLines = [];
    for (const line of rawEvent.split("\n")) {
      if (line.startsWith("event:"))
        eventName = line.slice(6).trim();
      else if (line.startsWith("data:"))
        dataLines.push(line.slice(5).trimStart());
    }
    if (eventName !== OCCUPANCY_EVENT || !dataLines.length)
      return;
    const event = JSON.parse(dataLines.join("\n"));
    this.zone.run(() => {
      this.occupancy.set(event.occupancy);
      if (event.changedSpace) {
        this.spaceChanges$.next(event.changedSpace);
      }
    });
  }
  scheduleReconnect() {
    if (!this.running)
      return;
    this.reconnectTimer = setTimeout(() => void this.connect(), RECONNECT_DELAY_MS);
  }
  static {
    this.\u0275fac = function OccupancyStreamService_Factory(t) {
      return new (t || _OccupancyStreamService)(\u0275\u0275inject(TokenStorageService), \u0275\u0275inject(AuthService), \u0275\u0275inject(SpaceService), \u0275\u0275inject(NgZone));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OccupancyStreamService, factory: _OccupancyStreamService.\u0275fac, providedIn: "root" });
  }
};

export {
  SpaceService,
  OccupancyStreamService
};
//# sourceMappingURL=chunk-AAI6QJ5F.js.map
