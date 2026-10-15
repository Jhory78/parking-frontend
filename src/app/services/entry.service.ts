import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENTRIES_ENDPOINTS } from '../constants/api.constants';
import {
  EntryResponse,
  PlateRecognitionResponse,
  RegisterEntryRequest,
  RegisterExitRequest
} from '../models/entry.model';

/** Ingresos y salidas por placa (Sprint 3). Disponible para OPERATOR y ADMIN. */
@Injectable({ providedIn: 'root' })
export class EntryService {
  constructor(private http: HttpClient) {}

  /**
   * RF-01, RF-02: propone la placa de una foto JPEG o PNG (máx. 5 MB). No registra nada.
   * Responde 422 si no se pudo leer: hay que pasar al ingreso manual (RF-03).
   */
  recognize(image: Blob, fileName = 'placa.jpg'): Observable<PlateRecognitionResponse> {
    const form = new FormData();
    form.append('image', image, fileName);
    // Sin Content-Type: el navegador lo pone con el boundary del multipart
    return this.http.post<PlateRecognitionResponse>(ENTRIES_ENDPOINTS.recognize, form);
  }

  /** RF-03..11: registra el ingreso confirmado por el operario y asigna la plaza. */
  registerEntry(request: RegisterEntryRequest): Observable<EntryResponse> {
    return this.http.post<EntryResponse>(ENTRIES_ENDPOINTS.entries, request);
  }

  /** Cierra el ingreso activo de la placa y libera su plaza. */
  registerExit(plate: string): Observable<EntryResponse> {
    const body: RegisterExitRequest = { plate };
    return this.http.post<EntryResponse>(ENTRIES_ENDPOINTS.exit, body);
  }

  /** RF-10: vehículos dentro, del ingreso más reciente al más antiguo. */
  findActive(): Observable<EntryResponse[]> {
    return this.http.get<EntryResponse[]>(ENTRIES_ENDPOINTS.active);
  }
}
