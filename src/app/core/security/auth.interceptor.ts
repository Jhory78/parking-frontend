import {
  HttpContextToken,
  HttpErrorResponse,
  HttpEvent,
  HttpInterceptorFn,
  HttpRequest
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { AUTH_ENDPOINTS } from '../../constants/api.constants';
import { AuthService } from '../../services/auth.service';
import { isTokenExpired } from '../../utils/jwt.utils';
import { AuthorizationFeedbackService } from './authorization-feedback.service';
import { TokenStorageService } from './token-storage.service';

const AUTH_RETRY = new HttpContextToken<boolean>(() => false);
const PUBLIC_AUTH_ENDPOINTS = [
  AUTH_ENDPOINTS.login,
  AUTH_ENDPOINTS.register,
  AUTH_ENDPOINTS.refresh
];

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const tokenStorage = inject(TokenStorageService);
  const authService = inject(AuthService);
  const feedback = inject(AuthorizationFeedbackService);
  const isPublicAuthRequest = PUBLIC_AUTH_ENDPOINTS.some(url =>
    request.url.startsWith(url)
  );
  const isLogoutRequest = request.url.startsWith(AUTH_ENDPOINTS.logout);

  const addBearerToken = (req: HttpRequest<unknown>): HttpRequest<unknown> => {
    const accessToken = tokenStorage.getAccessToken();
    return accessToken
      ? req.clone({
          setHeaders: { Authorization: `Bearer ${accessToken}` }
        })
      : req;
  };

  const handleHttpError = (
    error: HttpErrorResponse,
    originalRequest: HttpRequest<unknown>
  ): Observable<HttpEvent<unknown>> => {
    if (error.status === 403) {
      feedback.showForbidden();
      return throwError(() => error);
    }

    const canRetry =
      error.status === 401 &&
      !originalRequest.context.get(AUTH_RETRY) &&
      !isPublicAuthRequest &&
      !isLogoutRequest &&
      !!tokenStorage.getRefreshToken();

    if (!canRetry) {
      if (error.status === 401 && !isPublicAuthRequest) {
        authService.clearSession();
      }
      return throwError(() => error);
    }

    return authService.refresh().pipe(
      catchError(refreshError => {
        authService.clearSession();
        return throwError(() => refreshError);
      }),
      switchMap(() => {
        const retriedRequest = addBearerToken(
          originalRequest.clone({
            context: originalRequest.context.set(AUTH_RETRY, true)
          })
        );
        return next(retriedRequest).pipe(
          catchError(retryError => handleHttpError(retryError, retriedRequest))
        );
      })
    );
  };

  if (isPublicAuthRequest) {
    return next(request).pipe(
      catchError(error => handleHttpError(error, request))
    );
  }

  const accessToken = tokenStorage.getAccessToken();
  const shouldRefreshBeforeRequest =
    !isLogoutRequest &&
    !!accessToken &&
    isTokenExpired(accessToken) &&
    !!tokenStorage.getRefreshToken();

  if (shouldRefreshBeforeRequest) {
    return authService.refresh().pipe(
      catchError(error => {
        authService.clearSession();
        return throwError(() => error);
      }),
      switchMap(() => {
        const authenticatedRequest = addBearerToken(
          request.clone({
            context: request.context.set(AUTH_RETRY, true)
          })
        );
        return next(authenticatedRequest).pipe(
          catchError(error =>
            handleHttpError(error, authenticatedRequest)
          )
        );
      })
    );
  }

  return next(addBearerToken(request)).pipe(
    catchError(error => handleHttpError(error, request))
  );
};
