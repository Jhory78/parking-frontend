import { Component, DestroyRef, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { OccupancyStreamService } from '../../core/spaces/occupancy-stream.service';
import { SpaceService } from '../../services/space.service';
import {
  SPACE_STATUS_LABELS,
  SpaceResponse,
  SpaceStatus,
  VEHICLE_TYPE_LABELS,
  VehicleType
} from '../../models/parking.model';
import { apiErrorMessage } from '../../utils/api-error.utils';

/**
 * Mapa de espacios (RF-18) con filtro por tipo (RF-17).
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
  readonly statusLabels = SPACE_STATUS_LABELS;
  readonly vehicleTypes: VehicleType[] = ['CAR', 'MOTORCYCLE'];

  readonly spaces = signal<SpaceResponse[]>([]);
  readonly selectedType = signal<VehicleType | null>(null);
  readonly visibleSpaces = computed(() => {
    const type = this.selectedType();
    return type ? this.spaces().filter(space => space.vehicleType === type) : this.spaces();
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
      .subscribe(changed => this.replaceSpace(changed));
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

  availableFor(type: VehicleType): number | null {
    const availability = this.stream.occupancy()?.byVehicleType.find(item => item.vehicleType === type);
    return availability ? availability.availableSpaces : null;
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

  statusClass(status: SpaceStatus): string {
    return status.toLowerCase();
  }

  private replaceSpace(changed: SpaceResponse): void {
    this.spaces.update(spaces => spaces.map(space => (space.id === changed.id ? changed : space)));
  }
}
