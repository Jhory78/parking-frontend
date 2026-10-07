import { HttpErrorResponse } from '@angular/common/http';
import { ApiError } from '../models/auth.model';

function asApiError(error: unknown): ApiError | null {
  const body = error instanceof HttpErrorResponse ? error.error : null;
  return body && typeof body === 'object' ? (body as ApiError) : null;
}

/** Mensaje para mostrar al usuario, con respaldo si el backend no responde. */
export function apiErrorMessage(error: unknown, fallback: string): string {
  if (error instanceof HttpErrorResponse && error.status === 0) {
    return 'No se pudo conectar con el servidor.';
  }
  return asApiError(error)?.message ?? fallback;
}

/** Errores por campo para pintar debajo de cada input del formulario. */
export function apiFieldErrors(error: unknown): Record<string, string> {
  return asApiError(error)?.fieldErrors ?? {};
}
