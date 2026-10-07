import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { OccupancyAlertComponent } from './component/occupancy-alert/occupancy-alert.component';
import { AuthService } from './services/auth.service';
import { AuthorizationFeedbackService } from './core/security/authorization-feedback.service';
import { CurrentUserService } from './core/users/current-user.service';
import { OccupancyStreamService } from './core/spaces/occupancy-stream.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, SidebarComponent, OccupancyAlertComponent],
  template: `
    <div
      class="permission-message"
      *ngIf="authorizationFeedback.message() as message"
      role="alert"
    >
      <span>{{ message }}</span>
      <button type="button" (click)="authorizationFeedback.clear()">Cerrar</button>
    </div>
    <ng-container *ngIf="authService.isLoggedIn(); else noLayout">
      <app-navbar></app-navbar>
      <div class="layout">
        <app-sidebar></app-sidebar>
        <main class="content">
          <app-occupancy-alert></app-occupancy-alert>
          <router-outlet></router-outlet>
        </main>
      </div>
    </ng-container>
    <ng-template #noLayout>
      <router-outlet></router-outlet>
    </ng-template>
  `,
  styles: [`
    .layout { display: flex; align-items: flex-start; }
    .content { flex: 1; min-width: 0; min-height: calc(100vh - 72px); }
    .permission-message {
      position: fixed;
      top: 88px;
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
  constructor(
    public authService: AuthService,
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
