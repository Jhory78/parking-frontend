import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthorizationFeedbackService {
  readonly message = signal<string | null>(null);
  private timeoutId: ReturnType<typeof setTimeout> | null = null;

  showForbidden(): void {
    this.message.set('No tienes permisos para realizar esta acción.');

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.timeoutId = setTimeout(() => this.clear(), 5000);
  }

  clear(): void {
    this.message.set(null);
    this.timeoutId = null;
  }
}
