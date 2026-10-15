import { VehicleType } from './parking.model';

export type EntryStatus = 'ACTIVE' | 'CLOSED';

/** Etiquetas en singular, para un vehículo concreto. */
export const VEHICLE_TYPE_SINGULAR_LABELS: Record<VehicleType, string> = {
  CAR: 'Carro',
  MOTORCYCLE: 'Moto'
};

/** POST /entries/recognize (RF-01, RF-02, RF-04, RF-11). No registra nada. */
export interface PlateRecognitionResponse {
  /** Normalizada y con los errores típicos del OCR corregidos. */
  plate: string;
  /** De 0 a 1. */
  confidence: number;
  /** Por debajo del umbral del backend: pedir al operario que la revise. */
  lowConfidence: boolean;
  /** Inferido del formato; null si no es una placa colombiana. */
  vehicleType: VehicleType | null;
  validFormat: boolean;
  /** La placa ya tiene un ingreso activo: registrarla daría 409. */
  alreadyInside: boolean;
}

/** POST /entries. `vehicleType` es opcional si el formato de la placa lo indica (RF-04). */
export interface RegisterEntryRequest {
  plate: string;
  vehicleType?: VehicleType;
}

/** POST /entries/exit */
export interface RegisterExitRequest {
  plate: string;
}

/** Respuesta de POST /entries, POST /entries/exit y GET /entries/active. */
export interface EntryResponse {
  id: number;
  plate: string;
  vehicleType: VehicleType;
  space: { id: number; code: string };
  /** ISO-8601 UTC */
  entryTime: string;
  exitTime: string | null;
  /** Minutos completos; null mientras el vehículo está dentro. */
  durationMinutes: number | null;
  status: EntryStatus;
}
