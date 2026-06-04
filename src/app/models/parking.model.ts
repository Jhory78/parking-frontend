export interface ParkingSlot {
  id: number;
  code: string;
  floor: number;
  status: 'AVAILABLE' | 'OCCUPIED' | 'RESERVED' | 'MAINTENANCE';
  vehiclePlate?: string;
  entryTime?: string;
}

export interface ParkingRecord {
  id: number;
  slotId: number;
  vehiclePlate: string;
  entryTime: string;
  exitTime?: string;
  fee?: number;
}
