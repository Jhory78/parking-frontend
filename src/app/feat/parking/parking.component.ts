import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkingService } from '../../services/parking.service';
import { ParkingSlot } from '../../models/parking.model';

@Component({
  selector: 'app-parking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {
  slots: ParkingSlot[] = [];
  loading = true;

  constructor(private parkingService: ParkingService) {}

  ngOnInit(): void {
    this.loadSlots();
  }

  loadSlots(): void {
    this.parkingService.getSlots().subscribe({
      next: slots => { this.slots = slots; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  getStatusClass(status: string): string {
    return status.toLowerCase();
  }
}
