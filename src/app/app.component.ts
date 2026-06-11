import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { AuthService } from './services/auth.service';
import { AuthorizationFeedbackService } from './core/security/authorization-feedback.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, SidebarComponent],
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
          <router-outlet></router-outlet>
        </main>
      </div>
    </ng-container>
    <ng-template #noLayout>
      <router-outlet></router-outlet>
    </ng-template>
  `,
  styles: [`
    .layout { display: flex; }
    .content { flex: 1; background: #0f172a; min-height: calc(100vh - 60px); }
    .permission-message {
      position: fixed;
      top: 16px;
      right: 16px;
      z-index: 1000;
      display: flex;
      gap: 16px;
      align-items: center;
      max-width: 420px;
      padding: 12px 16px;
      border: 1px solid #f59e0b;
      border-radius: 8px;
      color: #fef3c7;
      background: #78350f;
      box-shadow: 0 8px 24px rgba(0, 0, 0, .25);
    }
    .permission-message button {
      border: 0;
      color: inherit;
      background: transparent;
      cursor: pointer;
    }
  `]
})
export class AppComponent {
  constructor(
    public authService: AuthService,
    public authorizationFeedback: AuthorizationFeedbackService
  ) {}
}
