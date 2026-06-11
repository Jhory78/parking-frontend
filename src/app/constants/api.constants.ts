import { environment } from '../../environments/environment';

export const API_BASE = environment.apiUrl;

export const AUTH_ENDPOINTS = {
  login:    `${API_BASE}/auth/login`,
  register: `${API_BASE}/auth/register`,
  refresh:  `${API_BASE}/auth/refresh`,
  logout:   `${API_BASE}/auth/logout`,
};

export const USUARIOS_ENDPOINT = `${API_BASE}/usuarios`;
