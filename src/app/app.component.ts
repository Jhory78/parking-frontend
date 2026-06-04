import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, SidebarComponent],
  template: `
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
  `]
})
export class AppComponent {
  constructor(public authService: AuthService) {}
}
