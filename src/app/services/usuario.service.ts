import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { USERS_ENDPOINT } from '../constants/api.constants';
import {
  CreateUserRequest,
  UpdateUserRequest,
  UpdateUserStatusRequest,
  UserResponse,
  UserStatus
} from '../models/auth.model';

/** Endpoints solo para ADMIN: un OPERATOR recibe 403. */
@Injectable({ providedIn: 'root' })
export class UsuarioService {
  constructor(private http: HttpClient) {}

  listar(): Observable<UserResponse[]> {
    return this.http.get<UserResponse[]>(USERS_ENDPOINT);
  }

  obtener(id: number): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${USERS_ENDPOINT}/${id}`);
  }

  crear(body: CreateUserRequest): Observable<UserResponse> {
    return this.http.post<UserResponse>(USERS_ENDPOINT, body);
  }

  actualizar(id: number, body: UpdateUserRequest): Observable<UserResponse> {
    return this.http.put<UserResponse>(`${USERS_ENDPOINT}/${id}`, body);
  }

  cambiarEstado(id: number, status: UserStatus): Observable<UserResponse> {
    const body: UpdateUserStatusRequest = { status };
    return this.http.patch<UserResponse>(`${USERS_ENDPOINT}/${id}/status`, body);
  }
}
