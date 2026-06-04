  import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { LoginRequest, RegisterRequest, TokenResponse } from '../models/auth.model';
import { AUTH_ENDPOINTS } from '../constants/api.constants';
import { TokenStorageService } from '../core/security/token-storage.service';
import { CurrentUserService } from '../core/users/current-user.service';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorageService,
    private currentUser: CurrentUserService,
    private router: Router
  ) {}

  login(body: LoginRequest): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(AUTH_ENDPOINTS.login, body).pipe(
      tap(res => {
        this.tokenStorage.saveTokens(res.access_token, res.refresh_token);
        this.currentUser.loadFromStorage();
      })
    );
  }

  register(body: RegisterRequest): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(AUTH_ENDPOINTS.register, body);
  }

  refresh(): Observable<TokenResponse> {
    const refreshToken = this.tokenStorage.getRefreshToken() ?? '';
    const params = new HttpParams().set('refreshToken', refreshToken);
    return this.http.post<TokenResponse>(AUTH_ENDPOINTS.refresh, null, { params }).pipe(
      tap(res => this.tokenStorage.saveTokens(res.access_token, res.refresh_token))
    );
  }

  logout(): void {
    const refreshToken = this.tokenStorage.getRefreshToken() ?? '';
    const params = new HttpParams().set('refreshToken', refreshToken);
    this.http.post(AUTH_ENDPOINTS.logout, null, { params }).subscribe({
      complete: () => this._clearAndRedirect(),
      error:    () => this._clearAndRedirect()
    });
  }

  private _clearAndRedirect(): void {
    this.tokenStorage.clearTokens();
    this.currentUser.clear();
    this.router.navigate(['/auth/login']);
  }

  isLoggedIn(): boolean {
    return !!this.tokenStorage.getAccessToken();
  }
}
