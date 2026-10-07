import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  Observable,
  catchError,
  finalize,
  map,
  of,
  shareReplay,
  tap
} from 'rxjs';
import { AUTH_ENDPOINTS } from '../constants/api.constants';
import { CurrentUserService } from '../core/users/current-user.service';
import { TokenStorageService } from '../core/security/token-storage.service';
import {
  LoginRequest,
  LoginResponse,
  UserResponse
} from '../models/auth.model';
import { isTokenExpired } from '../utils/jwt.utils';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private meRequest$: Observable<UserResponse> | null = null;

  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorageService,
    private currentUser: CurrentUserService,
    private router: Router
  ) {}

  login(body: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(AUTH_ENDPOINTS.login, body).pipe(
      tap(response => {
        this.tokenStorage.saveToken(response.accessToken);
        this.currentUser.loadFromStorage();
      })
    );
  }

  /**
   * Usuario en sesión según el backend. Un 401 aquí significa token
   * expirado o cuenta desactivada.
   */
  me(): Observable<UserResponse> {
    if (this.meRequest$) {
      return this.meRequest$;
    }

    this.meRequest$ = this.http.get<UserResponse>(AUTH_ENDPOINTS.me).pipe(
      tap(user => this.currentUser.setFromApi(user)),
      finalize(() => {
        this.meRequest$ = null;
      }),
      shareReplay({ bufferSize: 1, refCount: false })
    );

    return this.meRequest$;
  }

  /** El backend no invalida el token: basta con borrarlo del storage. */
  logout(): Observable<void> {
    return this.http.post<void>(AUTH_ENDPOINTS.logout, null).pipe(
      catchError(() => of(void 0)),
      finalize(() => this.clearSession())
    );
  }

  /**
   * Confirma la sesión antes de entrar a una ruta protegida: token
   * presente y vigente, y cuenta todavía activa según /auth/me.
   */
  ensureValidSession(): Observable<boolean> {
    const accessToken = this.tokenStorage.getAccessToken();
    if (!accessToken || isTokenExpired(accessToken)) {
      this.clearSession(false);
      return of(false);
    }

    if (this.currentUser.verified()) {
      return of(true);
    }

    return this.me().pipe(
      map(() => true),
      catchError(() => {
        this.clearSession(false);
        return of(false);
      })
    );
  }

  clearSession(redirect = true): void {
    this.tokenStorage.clearToken();
    this.currentUser.clear();
    this.meRequest$ = null;
    if (redirect) {
      void this.router.navigate(['/auth/login']);
    }
  }

  isLoggedIn(): boolean {
    return !!this.tokenStorage.getAccessToken();
  }
}
