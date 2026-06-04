import { Injectable } from '@angular/core';

const ACCESS_KEY  = 'pk_access_token';
const REFRESH_KEY = 'pk_refresh_token';

@Injectable({ providedIn: 'root' })
export class TokenStorageService {

  saveTokens(access: string, refresh: string): void {
    localStorage.setItem(ACCESS_KEY, access);
    localStorage.setItem(REFRESH_KEY, refresh);
  }

  getAccessToken(): string | null {
    return localStorage.getItem(ACCESS_KEY);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(REFRESH_KEY);
  }

  clearTokens(): void {
    localStorage.removeItem(ACCESS_KEY);
    localStorage.removeItem(REFRESH_KEY);
  }
}
