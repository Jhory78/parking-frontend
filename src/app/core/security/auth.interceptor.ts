import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AUTH_ENDPOINTS } from '../../constants/api.constants';
import { AuthService } from '../../services/auth.service';
import { AuthorizationFeedbackService } from './authorization-feedback.service';
import { TokenStorageService } from './token-storage.service';

/** Login y logout son públicos: no llevan Authorization. */
const PUBLIC_ENDPOINTS = [AUTH_ENDPOINTS.login, AUTH_ENDPOINTS.logout];

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const tokenStorage = inject(TokenStorageService);
  const authService = inject(AuthService);
  const feedback = inject(AuthorizationFeedbackService);

  const isPublicRequest = PUBLIC_ENDPOINTS.some(url =>
    request.url.startsWith(url)
  );
  // El guard decide la redirección cuando /auth/me falla, para no perder returnUrl.
  const isSessionCheck = request.url.startsWith(AUTH_ENDPOINTS.me);
  const accessToken = tokenStorage.getAccessToken();

  const authenticatedRequest =
    isPublicRequest || !accessToken
      ? request
      : request.clone({
          setHeaders: { Authorization: `Bearer ${accessToken}` }
        });

  return next(authenticatedRequest).pipe(
    catchError((error: HttpErrorResponse) => {
      // Sin refresh token usable: un 401 cierra la sesión. Cubre también
      // al operario desactivado mientras tenía la sesión abierta.
      if (error.status === 401 && !isPublicRequest) {
        authService.clearSession(!isSessionCheck);
      }

      // En el login un 403 es "cuenta desactivada": lo muestra el formulario.
      if (error.status === 403 && !isPublicRequest) {
        feedback.showForbidden();
      }

      return throwError(() => error);
    })
  );
};
