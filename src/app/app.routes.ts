import { Routes } from '@angular/router';
import { authGuard } from './core/security/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadComponent: () => import('./feat/auth/login/login.component').then(m => m.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () => import('./feat/auth/register/register.component').then(m => m.RegisterComponent)
      }
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
  { path: '**', redirectTo: '/dashboard' }
];
