import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
})
export class VehicleComponent implements OnInit {
  @Input() vehicle: Vehicle;

  constructor() {}

  ngOnInit(): void {}
}
