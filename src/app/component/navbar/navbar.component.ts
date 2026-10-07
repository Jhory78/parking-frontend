import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { CurrentUserService } from '../../core/users/current-user.service';
import { USER_ROLE_LABELS } from '../../models/auth.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  readonly roleLabels = USER_ROLE_LABELS;

  constructor(
    public authService: AuthService,
    public currentUser: CurrentUserService
  ) {}

  /** Inicial para el avatar del header. */
  get initial(): string {
    const user = this.currentUser.user();
    return (user?.name || user?.email || '?').charAt(0).toUpperCase();
  }

  logout(): void {
    this.authService.logout().subscribe();
  }
}
