import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OccupancyStreamService } from '../../core/spaces/occupancy-stream.service';
import { VEHICLE_TYPE_LABELS } from '../../models/parking.model';

/**
 * Resumen de ocupación en tiempo real (RF-16, RF-17, RF-19, RF-21, RF-22).
 * Los datos llegan por el stream; no hace falta recargar.
 */
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  readonly vehicleTypeLabels = VEHICLE_TYPE_LABELS;

  constructor(public stream: OccupancyStreamService) {}

  ngOnInit(): void {
    if (!this.stream.occupancy()) {
      this.stream.refresh();
    }
  }
}
