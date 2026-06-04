export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface TokenResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  refresh_expires_in: number;
  token_type: string;
  session_state: string;
}

export interface AuthUser {
  sub: string;
  email: string;
  given_name: string;
  family_name: string;
  realm_access?: { roles: string[] };
}
