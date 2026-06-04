import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkingService } from '../../services/parking.service';
import { ParkingSlot } from '../../models/parking.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  slots: ParkingSlot[] = [];
  loading = true;

  get available() { return this.slots.filter(s => s.status === 'AVAILABLE').length; }
  get occupied()  { return this.slots.filter(s => s.status === 'OCCUPIED').length; }
  get reserved()  { return this.slots.filter(s => s.status === 'RESERVED').length; }

  constructor(private parkingService: ParkingService) {}

  ngOnInit(): void {
    this.parkingService.getSlots().subscribe({
      next: slots => { this.slots = slots; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}
