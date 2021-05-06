import { Component, Input, OnInit } from '@angular/core';
import Vehicle from '../../models/vehicle';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
})
export class VehicleComponent implements OnInit {
  constructor() {}

  @Input() vehicle: Vehicle;

  ngOnInit(): void {}
}
