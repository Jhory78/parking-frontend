export type RolUsuario = 'ADMIN' | 'OPERARIO';
export type EstadoUsuario = 'ACTIVO' | 'INACTIVO';

export interface LoginRequest {
  correo: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  expiresIn: number;
}

export interface UsuarioRequest {
  nombre: string;
  correo: string;
  password: string;
  rol: RolUsuario;
}

export interface UsuarioResponse {
  id: number;
  nombre: string;
  correo: string;
  rol: RolUsuario;
  estado: EstadoUsuario;
}

export interface ActualizarUsuarioRequest {
  nombre: string;
  correo: string;
  estado: EstadoUsuario;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface ApiError {
  code: number;
  message: string;
  errors: string[];
}

export interface AuthUser {
  sub?: string;
  id?: number;
  nombre?: string;
  correo?: string;
  rol?: RolUsuario;
  role?: RolUsuario;
  roles?: RolUsuario[];
  authorities?: string[];
  exp?: number;
}
