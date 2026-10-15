import { VehicleType } from '../models/parking.model';

/** Mismas reglas que el backend (LicensePlate). */
const VALID = /^[A-Z0-9]{4,8}$/;
const CAR = /^[A-Z]{3}[0-9]{3}$/;
const MOTORCYCLE = /^[A-Z]{3}[0-9]{2}[A-Z]$/;

/** Mayúsculas, solo letras y números: `abc-123` → `ABC123`. */
export function normalizePlate(raw: string | null | undefined): string {
  return (raw ?? '').toUpperCase().replace(/[^A-Z0-9]/g, '');
}

export function isValidPlate(raw: string | null | undefined): boolean {
  return VALID.test(normalizePlate(raw));
}

/** RF-04: tipo según el formato colombiano; null si no es carro ni moto. */
export function inferVehicleType(raw: string | null | undefined): VehicleType | null {
  const plate = normalizePlate(raw);
  if (CAR.test(plate)) return 'CAR';
  if (MOTORCYCLE.test(plate)) return 'MOTORCYCLE';
  return null;
}

/** Para mostrar: `ABC123` → `ABC-123`, `ABC12D` → `ABC-12D`. Otros formatos quedan igual. */
export function formatPlate(raw: string | null | undefined): string {
  const plate = normalizePlate(raw);
  return inferVehicleType(plate) ? `${plate.slice(0, 3)}-${plate.slice(3)}` : plate;
}
