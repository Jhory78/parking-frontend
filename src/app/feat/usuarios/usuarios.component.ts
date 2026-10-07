import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CurrentUserService } from '../../core/users/current-user.service';
import { UsuarioService } from '../../services/usuario.service';
import {
  CreateUserRequest,
  UpdateUserRequest,
  USER_ROLE_LABELS,
  USER_STATUS_LABELS,
  UserResponse,
  UserRole,
  UserStatus
} from '../../models/auth.model';
import { apiErrorMessage, apiFieldErrors } from '../../utils/api-error.utils';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  readonly roleLabels = USER_ROLE_LABELS;
  readonly statusLabels = USER_STATUS_LABELS;

  usuarios: UserResponse[] = [];
  loading = true;
  saving = false;
  error = '';
  success = '';
  fieldErrors: Record<string, string> = {};

  /** Modal activo: creación de operario o edición de uno existente. */
  modo: 'crear' | 'editar' | null = null;
  editingUser: UserResponse | null = null;

  createForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    role: ['OPERATOR' as UserRole, Validators.required]
  });

  // `password` vacío conserva la actual, por eso solo valida la longitud.
  editForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.minLength(6)]
  });

  constructor(
    private usuarioService: UsuarioService,
    private currentUser: CurrentUserService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  /** La cuenta propia no se puede desactivar (el backend responde 409). */
  esCuentaPropia(user: UserResponse): boolean {
    return this.currentUser.id() === user.id;
  }

  /** Inicial para el avatar de la fila. */
  inicial(user: UserResponse): string {
    return (user.name || user.email || '?').charAt(0).toUpperCase();
  }

  cargarUsuarios(): void {
    this.loading = true;
    this.usuarioService.listar().subscribe({
      next: data => {
        this.usuarios = data;
        this.loading = false;
      },
      error: err => {
        this.error = apiErrorMessage(err, 'Error al cargar usuarios');
        this.loading = false;
      }
    });
  }

  iniciarCreacion(): void {
    this.limpiarMensajes();
    this.createForm.reset({ name: '', email: '', password: '', role: 'OPERATOR' });
    this.modo = 'crear';
  }

  iniciarEdicion(user: UserResponse): void {
    this.limpiarMensajes();
    this.editingUser = user;
    this.editForm.reset({
      name: user.name,
      email: user.email,
      password: ''
    });
    this.modo = 'editar';
  }

  cerrarModal(): void {
    this.modo = null;
    this.editingUser = null;
    this.fieldErrors = {};
  }

  guardarCreacion(): void {
    if (this.createForm.invalid) {
      this.createForm.markAllAsTouched();
      return;
    }

    const body: CreateUserRequest = this.createForm.getRawValue();
    this.saving = true;
    this.fieldErrors = {};

    this.usuarioService.crear(body).subscribe({
      next: nuevo => {
        this.usuarios = [...this.usuarios, nuevo];
        this.success = `${this.roleLabels[nuevo.role]} ${nuevo.name} creado.`;
        this.saving = false;
        this.cerrarModal();
      },
      error: err => this.manejarErrorGuardado(err, 'Error al crear el operario')
    });
  }

  guardarEdicion(): void {
    if (this.editForm.invalid || !this.editingUser) {
      this.editForm.markAllAsTouched();
      return;
    }

    const body: UpdateUserRequest = this.editForm.getRawValue();
    this.saving = true;
    this.fieldErrors = {};

    this.usuarioService.actualizar(this.editingUser.id, body).subscribe({
      next: actualizado => {
        this.reemplazarEnLista(actualizado);
        this.success = `Datos de ${actualizado.name} actualizados.`;
        this.saving = false;
        this.cerrarModal();
      },
      error: err => this.manejarErrorGuardado(err, 'Error al actualizar el operario')
    });
  }

  cambiarEstado(user: UserResponse, nuevoEstado: UserStatus): void {
    const accion = nuevoEstado === 'ACTIVE' ? 'activar' : 'desactivar';
    if (!confirm(`¿Seguro que quieres ${accion} a ${user.name}?`)) {
      return;
    }

    this.limpiarMensajes();
    this.usuarioService.cambiarEstado(user.id, nuevoEstado).subscribe({
      next: actualizado => {
        this.reemplazarEnLista(actualizado);
        const estado = this.statusLabels[actualizado.status].toLowerCase();
        this.success = `${actualizado.name} quedó ${estado}.`;
      },
      error: err => {
        this.error = apiErrorMessage(err, `Error al ${accion} al usuario`);
      }
    });
  }

  private manejarErrorGuardado(err: unknown, fallback: string): void {
    this.error = apiErrorMessage(err, fallback);
    this.fieldErrors = apiFieldErrors(err);
    this.saving = false;
  }

  private reemplazarEnLista(usuario: UserResponse): void {
    this.usuarios = this.usuarios.map(u =>
      u.id === usuario.id ? usuario : u
    );
  }

  private limpiarMensajes(): void {
    this.error = '';
    this.success = '';
    this.fieldErrors = {};
  }
}
