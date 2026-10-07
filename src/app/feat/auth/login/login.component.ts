import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ParkingRadarComponent } from '../../../component/parking-radar/parking-radar.component';
import { AuthService } from '../../../services/auth.service';
import { LoginRequest } from '../../../models/auth.model';
import { apiErrorMessage, apiFieldErrors } from '../../../utils/api-error.utils';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ParkingRadarComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form = this.fb.nonNullable.group({
    email:    ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  loading = false;
  error = '';
  fieldErrors: Record<string, string> = {};
  showPassword = false;

  constructor(
      private fb: FormBuilder,
      private authService: AuthService,
      private router: Router,
      private route: ActivatedRoute
  ) {}

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.error = '';
    this.fieldErrors = {};

    const body: LoginRequest = this.form.getRawValue();
    this.authService.login(body).subscribe({
      next: () => {
        const returnUrl =
          this.route.snapshot.queryParamMap.get('returnUrl') ?? '/dashboard';
        void this.router.navigateByUrl(returnUrl);
      },
      error: (err) => {
        // 401 credenciales inválidas, 403 cuenta desactivada, 400 validación.
        this.error = apiErrorMessage(err, 'Credenciales inválidas');
        this.fieldErrors = apiFieldErrors(err);
        this.loading = false;
      }
    });
  }
}
