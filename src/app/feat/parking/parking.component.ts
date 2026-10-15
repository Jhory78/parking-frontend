import { Component, DestroyRef, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { OccupancyStreamService } from '../../core/spaces/occupancy-stream.service';
import { SpaceService } from '../../services/space.service';
import {
  SpaceResponse,
  SpaceStatus,
  VEHICLE_TYPE_LABELS,
  VehicleType
} from '../../models/parking.model';
import { apiErrorMessage } from '../../utils/api-error.utils';

/** Tiempo que una plaza queda resaltada después de cambiar de estado. */
const FLASH_MS = 1600;

/** Plazas de un tipo de vehículo, separadas por estado para pintarlas distinto. */
interface Zone {
  type: VehicleType;
  icon: string;
  range: string;
  total: number;
  occupied: SpaceResponse[];
  available: SpaceResponse[];
}

/**
 * Mapa de espacios (RF-18) agrupado por tipo de vehículo (RF-17).
 * Cada cambio, propio o de otro operario, llega por el stream (RF-16).
 */
@Component({
  selector: 'app-parking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {
  readonly vehicleTypeLabels = VEHICLE_TYPE_LABELS;
  readonly vehicleTypes: VehicleType[] = ['CAR', 'MOTORCYCLE'];

  readonly spaces = signal<SpaceResponse[]>([]);
  readonly selectedType = signal<VehicleType | null>(null);
  /** Plazas que acaban de cambiar, para resaltarlas un instante. */
  readonly flashing = signal<ReadonlySet<number>>(new Set());

  readonly zones = computed<Zone[]>(() => {
    const selected = this.selectedType();
    return this.vehicleTypes
      .filter(type => !selected || type === selected)
      .map(type => {
        // El backend ya las entrega ordenadas por código
        const spaces = this.spaces().filter(space => space.vehicleType === type);
        return {
          type,
          icon: type === 'CAR' ? 'directions_car' : 'two_wheeler',
          range: spaces.length ? `${spaces[0].code} a ${spaces[spaces.length - 1].code}` : '',
          total: spaces.length,
          occupied: spaces.filter(space => space.status === 'OCCUPIED'),
          available: spaces.filter(space => space.status === 'AVAILABLE')
        };
      })
      .filter(zone => zone.total > 0);
  });

  loading = true;
  updatingSpaceId: number | null = null;
  error = '';

  constructor(
    private spaceService: SpaceService,
    public stream: OccupancyStreamService,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    this.loadSpaces();
    if (!this.stream.occupancy()) {
      this.stream.refresh();
    }

    this.stream.spaceChanges$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(changed => {
        this.replaceSpace(changed);
        this.flash(changed.id);
      });
  }

  loadSpaces(): void {
    this.loading = true;
    this.spaceService.findSpaces().subscribe({
      next: spaces => {
        this.spaces.set(spaces);
        this.loading = false;
      },
      error: err => {
        this.error = apiErrorMessage(err, 'Error al cargar los espacios');
        this.loading = false;
      }
    });
  }

  selectType(type: VehicleType | null): void {
    this.selectedType.set(type);
  }

  /** Marca el espacio como ocupado o disponible (RF-16). */
  toggleStatus(space: SpaceResponse): void {
    const newStatus: SpaceStatus = space.status === 'AVAILABLE' ? 'OCCUPIED' : 'AVAILABLE';
    const action = newStatus === 'OCCUPIED' ? 'marcar como ocupado' : 'liberar';
    if (!confirm(`¿Seguro que quieres ${action} el espacio ${space.code}?`)) {
      return;
    }

    this.error = '';
    this.updatingSpaceId = space.id;
    this.spaceService.changeStatus(space.id, newStatus).subscribe({
      next: updated => {
        this.replaceSpace(updated);
        this.flash(updated.id);
        this.updatingSpaceId = null;
      },
      error: err => {
        // 409: otro operario lo cambió antes; se recarga para ver el estado real
        this.error = apiErrorMessage(err, `No se pudo ${action} el espacio`);
        this.updatingSpaceId = null;
        this.loadSpaces();
      }
    });
  }

  private replaceSpace(changed: SpaceResponse): void {
    this.spaces.update(spaces => spaces.map(space => (space.id === changed.id ? changed : space)));
  }

  private flash(spaceId: number): void {
    this.flashing.update(ids => new Set(ids).add(spaceId));
    setTimeout(() => {
      this.flashing.update(ids => {
        const next = new Set(ids);
        next.delete(spaceId);
        return next;
      });
    }, FLASH_MS);
  }
}
