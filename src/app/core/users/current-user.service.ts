import { Injectable, computed, signal } from '@angular/core';
import { AuthUser, UserResponse, UserRole } from '../../models/auth.model';
import { decodeJwt } from '../../utils/jwt.utils';
import { TokenStorageService } from '../security/token-storage.service';

@Injectable({ providedIn: 'root' })
export class CurrentUserService {
  readonly user = signal<AuthUser | null>(null);
  readonly id = computed(() => this.user()?.id ?? null);

  /** true cuando los datos vienen de /auth/me y no solo del JWT. */
  readonly verified = signal(false);

  constructor(private tokenService: TokenStorageService) {
    this.loadFromStorage();
  }

  /** Lectura optimista de los claims del token, para pintar el layout al instante. */
  loadFromStorage(): void {
    const token = this.tokenService.getAccessToken();
    const claims = token ? decodeJwt(token) : null;

    this.verified.set(false);
    this.user.set(
      claims
        ? {
            id: claims.id ?? null,
            name: claims.name ?? '',
            email: claims.sub ?? '',
            role: claims.role ?? null,
            status: null
          }
        : null
    );
  }

  /** Datos confirmados por el backend en /auth/me. */
  setFromApi(user: UserResponse): void {
    this.user.set({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status
    });
    this.verified.set(true);
  }

  hasRole(role: UserRole): boolean {
    return this.user()?.role === role;
  }

  clear(): void {
    this.user.set(null);
    this.verified.set(false);
  }
}
