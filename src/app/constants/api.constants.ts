import { environment } from '../../environments/environment';

export const API_BASE = environment.apiUrl;

export const AUTH_ENDPOINTS = {
  login:  `${API_BASE}/auth/login`,
  me:     `${API_BASE}/auth/me`,
  logout: `${API_BASE}/auth/logout`,
};

export const USERS_ENDPOINT = `${API_BASE}/users`;

export const SPACES_ENDPOINTS = {
  spaces:       `${API_BASE}/spaces`,
  availability: `${API_BASE}/spaces/availability`,
  occupancy:    `${API_BASE}/spaces/occupancy`,
  stream:       `${API_BASE}/spaces/stream`,
};

export const ENTRIES_ENDPOINTS = {
  entries:   `${API_BASE}/entries`,
  recognize: `${API_BASE}/entries/recognize`,
  exit:      `${API_BASE}/entries/exit`,
  active:    `${API_BASE}/entries/active`,
};
