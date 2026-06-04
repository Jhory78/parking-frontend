import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenStorageService } from './token-storage.service';

export const authGuard: CanActivateFn = () => {
  const tokenService = inject(TokenStorageService);
  const router = inject(Router);

  if (tokenService.getAccessToken()) {
    return true;
  }
  router.navigate(['/auth/login']);
  return false;
};
