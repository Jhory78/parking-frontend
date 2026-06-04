import { Injectable, signal } from '@angular/core';
import { AuthUser } from '../../models/auth.model';
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
    if (token) {
      this.user.set(decodeJwt(token));
    }
  }

  hasRole(role: string): boolean {
    return this.user()?.realm_access?.roles?.includes(role) ?? false;
  }

  clear(): void {
    this.user.set(null);
  }
}
