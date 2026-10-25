import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { CurrentUserService } from '../../core/users/current-user.service';
import { AuthService } from '../../services/auth.service';
import { USER_ROLE_LABELS } from '../../models/auth.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  // Solo las pantallas que existen hoy. El icono es un Material Symbol.
  links = [
    { path: '/dashboard', label: 'Dashboard',       icon: 'space_dashboard', adminOnly: false },
    { path: '/ingresos',  label: 'Ingresos',        icon: 'garage',          adminOnly: false },
    { path: '/parking',   label: 'Estacionamiento', icon: 'local_parking',   adminOnly: false },
    { path: '/usuarios',  label: 'Operarios',       icon: 'badge',           adminOnly: true },
  ];

  readonly roleLabels = USER_ROLE_LABELS;

  constructor(
    public currentUser: CurrentUserService,
    private authService: AuthService
  ) {}

  get initial(): string {
    const user = this.currentUser.user();
    return (user?.name || user?.email || '?').charAt(0).toUpperCase();
  }

  logout(): void {
    this.authService.logout().subscribe();
  }
}
