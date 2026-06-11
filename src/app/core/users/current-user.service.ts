import { Injectable, signal } from '@angular/core';
import { AuthUser, RolUsuario } from '../../models/auth.model';
import { decodeJwt } from '../../utils/jwt.utils';
import { TokenStorageService } from '../security/token-storage.service';

@Injectable({ providedIn: 'root' })
export class CurrentUserService {
  readonly user = signal<AuthUser | null>(null);

  constructor(private tokenService: TokenStorageService) {
    this.loadFromStorage();
  }

  loadFromStorage(): void {
    const token = this.tokenService.getAccessToken();
    this.user.set(token ? decodeJwt(token) : null);
  }

  hasRole(role: RolUsuario): boolean {
    const user = this.user();
    if (!user) return false;

    const roles = [
      user.rol,
      user.role,
      ...(user.roles ?? []),
      ...(user.authorities ?? []).map(authority => authority.replace(/^ROLE_/, ''))
    ];

    return roles.includes(role);
  }

  clear(): void {
    this.user.set(null);
  }
}
