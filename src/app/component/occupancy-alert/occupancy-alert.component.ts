import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OccupancyStreamService } from '../../core/spaces/occupancy-stream.service';
import { OccupancyLevel } from '../../models/parking.model';

/**
 * Alerta en pantalla de ocupación alta (RF-20) y parqueadero lleno (RF-21, RF-22).
 * Visible en todas las pantallas. Si el operario la cierra, reaparece cuando
 * el nivel cambia (por ejemplo, de HIGH a FULL).
 */
@Component({
  selector: 'app-occupancy-alert',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      *ngIf="visibleAlert() as alert"
      class="occupancy-alert"
      [class.full]="alert.level === 'FULL'"
      role="alert"
      aria-live="assertive"
    >
      <span class="material-symbols-outlined icon">
        {{ alert.level === 'FULL' ? 'block' : 'warning' }}
      </span>
      <span class="message">{{ alert.message }}</span>
      <button type="button" class="close" (click)="dismiss(alert.level)" aria-label="Cerrar alerta">
        <span class="material-symbols-outlined">close</span>
      </button>
    </div>
  `,
  styles: [`
    .occupancy-alert {
      display: flex;
      align-items: center;
      gap: .75rem;
      margin: 1rem 2rem 0;
      padding: .85rem 1.1rem;
      border: 1px solid rgba(255, 185, 95, .4);
      border-radius: var(--pk-radius);
      color: var(--pk-secondary);
      background: var(--pk-secondary-soft);
      font-size: .9rem;
      font-weight: 600;
    }
    .occupancy-alert.full {
      border-color: rgba(255, 180, 171, .45);
      color: var(--pk-danger);
      background: var(--pk-danger-soft);
    }
    .icon { font-size: 22px; }
    .message { flex: 1; }
    .close {
      display: grid;
      place-items: center;
      padding: .2rem;
      border: 0;
      border-radius: 50%;
      color: inherit;
      background: transparent;
      cursor: pointer;
    }
    .close:hover { background: rgba(255, 255, 255, .08); }
    @media (max-width: 640px) { .occupancy-alert { margin: 1rem 1rem 0; } }
  `]
})
export class OccupancyAlertComponent {
  private readonly dismissedLevel = signal<OccupancyLevel | null>(null);

  readonly visibleAlert = computed(() => {
    const occupancy = this.stream.occupancy();
    if (!occupancy || occupancy.level === 'NORMAL' || !occupancy.alertMessage) {
      return null;
    }
    if (this.dismissedLevel() === occupancy.level) {
      return null;
    }
    return { level: occupancy.level, message: occupancy.alertMessage };
  });

  constructor(private stream: OccupancyStreamService) {}

  dismiss(level: OccupancyLevel): void {
    this.dismissedLevel.set(level);
  }
}
