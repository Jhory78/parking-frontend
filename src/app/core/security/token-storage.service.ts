import { Injectable } from '@angular/core';

const ACCESS_KEY = 'pk_access_token';

/**
 * El backend solo emite un accessToken (sin refresh token).
 * Al expirar se vuelve a iniciar sesión.
 */
@Injectable({ providedIn: 'root' })
export class TokenStorageService {

  saveToken(access: string): void {
    localStorage.setItem(ACCESS_KEY, access);
  }

  getAccessToken(): string | null {
    return localStorage.getItem(ACCESS_KEY);
  }

  clearToken(): void {
    localStorage.removeItem(ACCESS_KEY);
  }
}
