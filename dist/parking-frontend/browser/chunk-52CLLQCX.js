import {
  HttpErrorResponse
} from "./chunk-KGFZV2CR.js";

// src/app/utils/api-error.utils.ts
function asApiError(error) {
  const body = error instanceof HttpErrorResponse ? error.error : null;
  return body && typeof body === "object" ? body : null;
}
function apiErrorMessage(error, fallback) {
  if (error instanceof HttpErrorResponse && error.status === 0) {
    return "No se pudo conectar con el servidor.";
  }
  return asApiError(error)?.message ?? fallback;
}
function apiFieldErrors(error) {
  return asApiError(error)?.fieldErrors ?? {};
}

export {
  apiErrorMessage,
  apiFieldErrors
};
//# sourceMappingURL=chunk-52CLLQCX.js.map
