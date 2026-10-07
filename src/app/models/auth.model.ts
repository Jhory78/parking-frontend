export type UserRole = 'ADMIN' | 'OPERATOR';
export type UserStatus = 'ACTIVE' | 'INACTIVE';

/** Etiquetas para mostrar en pantalla: la API usa valores en inglés. */
export const USER_ROLE_LABELS: Record<UserRole, string> = {
  ADMIN: 'Administrador',
  OPERATOR: 'Operario'
};

export const USER_STATUS_LABELS: Record<UserStatus, string> = {
  ACTIVE: 'Activo',
  INACTIVE: 'Inactivo'
};

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  tokenType: string;
  expiresIn: number;
}

/** POST /users: `role` es opcional, el backend asume OPERATOR. */
export interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
  role?: UserRole;
}

/**
 * PUT /users/{id}: `name` y `email` son obligatorios.
 * `password` vacío o ausente conserva la actual.
 */
export interface UpdateUserRequest {
  name: string;
  email: string;
  password?: string;
}

/** PATCH /users/{id}/status */
export interface UpdateUserStatusRequest {
  status: UserStatus;
}

/** Respuesta de /users y de /auth/me. */
export interface UserResponse {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
}

/** Formato de error común a todos los endpoints. */
export interface ApiError {
  timestamp: string;
  status: number;
  error: string;
  message: string;
  path: string;
  fieldErrors?: Record<string, string>;
}

/** Claims del JWT emitido por /auth/login. */
export interface JwtClaims {
  sub?: string;
  id?: number;
  name?: string;
  role?: UserRole;
  exp?: number;
}

/** Usuario en sesión, provenga del JWT o de /auth/me. */
export interface AuthUser {
  id: number | null;
  name: string;
  email: string;
  role: UserRole | null;
  status: UserStatus | null;
}
