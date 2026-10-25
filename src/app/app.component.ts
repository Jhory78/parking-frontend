import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { OccupancyAlertComponent } from './component/occupancy-alert/occupancy-alert.component';
import { ConfirmDialogComponent } from './component/confirm-dialog/confirm-dialog.component';
import { AuthorizationFeedbackService } from './core/security/authorization-feedback.service';
import { CurrentUserService } from './core/users/current-user.service';
import { OccupancyStreamService } from './core/spaces/occupancy-stream.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent, OccupancyAlertComponent, ConfirmDialogComponent],
  template: `
    <div
      class="permission-message"
      *ngIf="authorizationFeedback.message() as message"
      role="alert"
    >
      <span>{{ message }}</span>
      <button type="button" (click)="authorizationFeedback.clear()">Cerrar</button>
    </div>
    <div class="layout">
      <app-sidebar *ngIf="showLayout()"></app-sidebar>
      <main class="content">
        <app-occupancy-alert *ngIf="showLayout()"></app-occupancy-alert>
        <router-outlet></router-outlet>
      </main>
    </div>
    <app-confirm-dialog></app-confirm-dialog>
  `,
  styles: [`
    .layout { display: flex; align-items: flex-start; min-height: 100vh; }
    .content { flex: 1; min-width: 0; }
    .permission-message {
      position: fixed;
      top: 24px;
      right: 24px;
      z-index: 1000;
      display: flex;
      gap: 16px;
      align-items: center;
      max-width: 420px;
      padding: 14px 20px;
      border: 1px solid var(--pk-secondary);
      border-radius: var(--pk-radius-pill);
      color: var(--pk-secondary);
      background: var(--pk-surface-high);
      box-shadow: var(--pk-shadow-lg);
    }
    .permission-message span { font-size: .9rem; font-weight: 500; }
    .permission-message button {
      border: 0;
      padding: 0;
      color: var(--pk-ink-muted);
      background: transparent;
      font-family: inherit;
      font-size: .85rem;
      cursor: pointer;
    }
    @media (max-width: 860px) {
      .layout { flex-direction: column; }
      .content { width: 100%; }
    }
  `]
})
export class AppComponent {
  // Por ruta y no por token: el token cambia antes de que termine la navegación.
  readonly showLayout = toSignal(
    inject(Router).events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(event => !event.urlAfterRedirects.startsWith('/auth'))
    ),
    { initialValue: false }
  );

  constructor(
    public authorizationFeedback: AuthorizationFeedbackService,
    currentUser: CurrentUserService,
    occupancyStream: OccupancyStreamService
  ) {
    // Una sola conexión en tiempo real mientras haya sesión (RF-16, RF-20)
    effect(() => {
      if (currentUser.id() !== null) {
        occupancyStream.start();
      } else {
        occupancyStream.stop();
      }
    }, { allowSignalWrites: true });
  }
}
