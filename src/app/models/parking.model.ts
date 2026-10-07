export type VehicleType = 'CAR' | 'MOTORCYCLE';
export type SpaceStatus = 'AVAILABLE' | 'OCCUPIED';
export type OccupancyLevel = 'NORMAL' | 'HIGH' | 'FULL';

/** Etiquetas para mostrar en pantalla: la API usa valores en inglés. */
export const VEHICLE_TYPE_LABELS: Record<VehicleType, string> = {
  CAR: 'Carros',
  MOTORCYCLE: 'Motos'
};

export const SPACE_STATUS_LABELS: Record<SpaceStatus, string> = {
  AVAILABLE: 'Disponible',
  OCCUPIED: 'Ocupado'
};

/** GET /spaces (RF-18) */
export interface SpaceResponse {
  id: number;
  code: string;
  vehicleType: VehicleType;
  status: SpaceStatus;
}

/** GET /spaces/availability (RF-17) */
export interface AvailabilityResponse {
  vehicleType: VehicleType;
  totalSpaces: number;
  availableSpaces: number;
  occupiedSpaces: number;
  occupancyPercentage: number;
}

/** GET /spaces/occupancy (RF-19, RF-21, RF-22) */
export interface OccupancyResponse {
  totalSpaces: number;
  occupiedSpaces: number;
  availableSpaces: number;
  occupancyPercentage: number;
  level: OccupancyLevel;
  /** true mientras la barrera de ingreso está bloqueada por parqueadero lleno. */
  entryBlocked: boolean;
  /** Texto para el operario cuando level es HIGH o FULL; null en NORMAL. */
  alertMessage: string | null;
  byVehicleType: AvailabilityResponse[];
}

/** Evento `occupancy` de GET /spaces/stream (RF-16, RF-20). */
export interface OccupancyEvent {
  /** Espacio que cambió; null en la foto inicial que llega al conectarse. */
  changedSpace: SpaceResponse | null;
  occupancy: OccupancyResponse;
}

/** PATCH /spaces/{id}/status */
export interface UpdateSpaceStatusRequest {
  status: SpaceStatus;
}
