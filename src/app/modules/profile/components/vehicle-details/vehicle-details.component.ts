import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../../services/vehicle-service';
import Vehicle from '../../../../models/vehicle';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css'],
})
export class VehicleDetailsComponent implements OnInit {
  id: number;
  vehicle: Vehicle;

  constructor(
    private route: ActivatedRoute,
    private vehicleService: VehicleService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (data) => (this.id = +data.get('id')),
    );
    this.vehicleService
      .getByID(this.id)
      .subscribe((data) => (this.vehicle = data));
  }
}
