import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { UserRole } from '../../models/auth.model';
import { AuthService } from '../../services/auth.service';
import { CurrentUserService } from '../users/current-user.service';
import { AuthorizationFeedbackService } from './authorization-feedback.service';

export const roleGuard: CanActivateFn = route => {
  const authService = inject(AuthService);
  const currentUser = inject(CurrentUserService);
  const feedback = inject(AuthorizationFeedbackService);
  const router = inject(Router);
  const allowedRoles = (route.data?.['roles'] ?? []) as UserRole[];

  // ensureValidSession confirma el rol con /auth/me, no solo con el JWT.
  return authService.ensureValidSession().pipe(
    map(isAuthenticated => {
      if (!isAuthenticated) {
        return router.createUrlTree(['/auth/login']);
      }

      if (allowedRoles.some(role => currentUser.hasRole(role))) {
        return true;
      }

      feedback.showForbidden();
      return router.createUrlTree(['/dashboard']);
    })
  );
};
