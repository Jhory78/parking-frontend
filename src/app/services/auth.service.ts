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
  tap,
  throwError
} from 'rxjs';
import { AUTH_ENDPOINTS } from '../constants/api.constants';
import { CurrentUserService } from '../core/users/current-user.service';
import { TokenStorageService } from '../core/security/token-storage.service';
import {
  LoginRequest,
  LoginResponse,
  RefreshTokenRequest,
  UsuarioRequest,
  UsuarioResponse
} from '../models/auth.model';
import { isTokenExpired } from '../utils/jwt.utils';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private refreshRequest$: Observable<LoginResponse> | null = null;

  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorageService,
    private currentUser: CurrentUserService,
    private router: Router
  ) {}

  register(body: UsuarioRequest): Observable<UsuarioResponse> {
    return this.http.post<UsuarioResponse>(AUTH_ENDPOINTS.register, body);
  }

  login(body: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(AUTH_ENDPOINTS.login, body).pipe(
      tap(response => this.saveSession(response))
    );
  }

  refresh(): Observable<LoginResponse> {
    if (this.refreshRequest$) {
      return this.refreshRequest$;
    }

    const refreshToken = this.tokenStorage.getRefreshToken();
    if (!refreshToken) {
      return throwError(() => new Error('No hay refresh token disponible'));
    }

    const body: RefreshTokenRequest = { refreshToken };
    this.refreshRequest$ = this.http
      .post<LoginResponse>(AUTH_ENDPOINTS.refresh, body)
      .pipe(
        tap(response => this.saveSession(response)),
        finalize(() => {
          this.refreshRequest$ = null;
        }),
        shareReplay({ bufferSize: 1, refCount: false })
      );

    return this.refreshRequest$;
  }

  logout(): Observable<void> {
    return this.http.post<void>(AUTH_ENDPOINTS.logout, null).pipe(
      catchError(() => of(void 0)),
      finalize(() => this.clearSession())
    );
  }

  ensureValidSession(): Observable<boolean> {
    const accessToken = this.tokenStorage.getAccessToken();
    if (accessToken && !isTokenExpired(accessToken)) {
      return of(true);
    }

    return this.refresh().pipe(
      map(() => true),
      catchError(() => {
        this.clearSession(false);
        return of(false);
      })
    );
  }

  clearSession(redirect = true): void {
    this.tokenStorage.clearTokens();
    this.currentUser.clear();
    if (redirect) {
      void this.router.navigate(['/auth/login']);
    }
  }

  isLoggedIn(): boolean {
    return !!this.tokenStorage.getAccessToken();
  }

  private saveSession(response: LoginResponse): void {
    this.tokenStorage.saveTokens(response.accessToken, response.refreshToken);
    this.currentUser.loadFromStorage();
  }
}
