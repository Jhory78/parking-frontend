import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SPACES_ENDPOINTS } from '../constants/api.constants';
import {
  AvailabilityResponse,
  OccupancyResponse,
  SpaceResponse,
  SpaceStatus,
  UpdateSpaceStatusRequest,
  VehicleType
} from '../models/parking.model';

export interface SpaceFilter {
  vehicleType?: VehicleType;
  status?: SpaceStatus;
}

/** Espacios del parqueadero (Sprint 2). Disponible para OPERATOR y ADMIN. */
@Injectable({ providedIn: 'root' })
export class SpaceService {
  constructor(private http: HttpClient) {}

  /** RF-18: estado de cada espacio, ordenado por código. */
  findSpaces(filter: SpaceFilter = {}): Observable<SpaceResponse[]> {
    let params = new HttpParams();
    if (filter.vehicleType) params = params.set('vehicleType', filter.vehicleType);
    if (filter.status) params = params.set('status', filter.status);
    return this.http.get<SpaceResponse[]>(SPACES_ENDPOINTS.spaces, { params });
  }

  /** RF-17: disponibilidad por tipo de vehículo. */
  findAvailability(vehicleType?: VehicleType): Observable<AvailabilityResponse[]> {
    const params = vehicleType ? new HttpParams().set('vehicleType', vehicleType) : undefined;
    return this.http.get<AvailabilityResponse[]>(SPACES_ENDPOINTS.availability, { params });
  }

  /** RF-19, RF-21, RF-22: nivel de ocupación, alerta y estado de la barrera. */
  getOccupancy(): Observable<OccupancyResponse> {
    return this.http.get<OccupancyResponse>(SPACES_ENDPOINTS.occupancy);
  }

  /** RF-16: marca un espacio como ocupado o disponible. */
  changeStatus(spaceId: number, status: SpaceStatus): Observable<SpaceResponse> {
    const body: UpdateSpaceStatusRequest = { status };
    return this.http.patch<SpaceResponse>(`${SPACES_ENDPOINTS.spaces}/${spaceId}/status`, body);
  }
}
