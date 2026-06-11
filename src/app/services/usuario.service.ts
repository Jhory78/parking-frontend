import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { USUARIOS_ENDPOINT } from '../constants/api.constants';
import {
  ActualizarUsuarioRequest,
  EstadoUsuario,
  UsuarioResponse
} from '../models/auth.model';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  constructor(private http: HttpClient) {}

  listar(): Observable<UsuarioResponse[]> {
    return this.http.get<UsuarioResponse[]>(USUARIOS_ENDPOINT);
  }

  obtener(id: number): Observable<UsuarioResponse> {
    return this.http.get<UsuarioResponse>(`${USUARIOS_ENDPOINT}/${id}`);
  }

  actualizar(
    id: number,
    body: ActualizarUsuarioRequest
  ): Observable<UsuarioResponse> {
    return this.http.put<UsuarioResponse>(`${USUARIOS_ENDPOINT}/${id}`, body);
  }

  cambiarEstado(
    id: number,
    estado: EstadoUsuario
  ): Observable<UsuarioResponse> {
    const params = new HttpParams().set('estado', estado);
    return this.http.patch<UsuarioResponse>(
      `${USUARIOS_ENDPOINT}/${id}/estado`,
      null,
      { params }
    );
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${USUARIOS_ENDPOINT}/${id}`);
  }
}
