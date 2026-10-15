import { Routes } from '@angular/router';
import { authGuard } from './core/security/auth.guard';
import { roleGuard } from './core/security/role.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadComponent: () => import('./feat/auth/login/login.component').then(m => m.LoginComponent)
      },
      // No hay registro público: las cuentas las crea un ADMIN desde /usuarios.
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () => import('./feat/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'parking',
    canActivate: [authGuard],
    loadComponent: () => import('./feat/parking/parking.component').then(m => m.ParkingComponent)
  },
  {
    path: 'ingresos',
    canActivate: [authGuard],
    loadComponent: () => import('./feat/ingresos/ingresos.component').then(m => m.IngresosComponent)
  },
  {
    path: 'usuarios',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['ADMIN'] },
    loadComponent: () => import('./feat/usuarios/usuarios.component').then(m => m.UsuariosComponent)
  },
  { path: '**', redirectTo: '/dashboard' }
];
