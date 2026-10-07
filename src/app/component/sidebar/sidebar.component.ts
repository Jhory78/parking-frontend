import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { CurrentUserService } from '../../core/users/current-user.service';

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
    { path: '/parking',   label: 'Estacionamiento', icon: 'local_parking',   adminOnly: false },
    { path: '/usuarios',  label: 'Operarios',       icon: 'badge',           adminOnly: true },
  ];

  constructor(public currentUser: CurrentUserService) {}
}
