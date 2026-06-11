import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of, switchMap } from 'rxjs';
import { RolUsuario } from '../../models/auth.model';
import { AuthService } from '../../services/auth.service';
import { CurrentUserService } from '../users/current-user.service';
import { AuthorizationFeedbackService } from './authorization-feedback.service';

export const roleGuard: CanActivateFn = route => {
  const authService = inject(AuthService);
  const currentUser = inject(CurrentUserService);
  const feedback = inject(AuthorizationFeedbackService);
  const router = inject(Router);
  const allowedRoles = (route.data?.['roles'] ?? []) as RolUsuario[];

  return authService.ensureValidSession().pipe(
    switchMap(isAuthenticated => {
      if (!isAuthenticated) {
        return of(router.createUrlTree(['/auth/login']));
      }

      const isAllowed = allowedRoles.some(role => currentUser.hasRole(role));
      if (isAllowed) {
        return of(true);
      }

      feedback.showForbidden();
      return of(router.createUrlTree(['/dashboard']));
    }),
    catchError(() => of(router.createUrlTree(['/auth/login'])))
  );
};
