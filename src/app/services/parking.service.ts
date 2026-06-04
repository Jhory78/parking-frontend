import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE } from '../constants/api.constants';
import { ParkingSlot, ParkingRecord } from '../models/parking.model';

@Injectable({ providedIn: 'root' })
export class ParkingService {
  private base = `${API_BASE}/parking`;

  constructor(private http: HttpClient) {}

  getSlots(): Observable<ParkingSlot[]> {
    return this.http.get<ParkingSlot[]>(`${this.base}/slots`);
  }

  getSlot(id: number): Observable<ParkingSlot> {
    return this.http.get<ParkingSlot>(`${this.base}/slots/${id}`);
  }

  registerEntry(slotId: number, vehiclePlate: string): Observable<ParkingRecord> {
    return this.http.post<ParkingRecord>(`${this.base}/entry`, { slotId, vehiclePlate });
  }

  registerExit(recordId: number): Observable<ParkingRecord> {
    return this.http.post<ParkingRecord>(`${this.base}/exit/${recordId}`, {});
  }

  getRecords(): Observable<ParkingRecord[]> {
    return this.http.get<ParkingRecord[]>(`${this.base}/records`);
  }
}
