import { Component, Input, OnInit } from '@angular/core';
import InventoryVehicle from '../../../../models/inventory-vehicle';
import Vehicle from '../../../../models/vehicle';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
})
export class VehicleComponent implements OnInit {
  @Input() inventoryVehicle: InventoryVehicle;
  vehicle: Vehicle;

  constructor() {}

  ngOnInit(): void {
    this.vehicle = this.inventoryVehicle.vehicle;
    console.log(this.vehicle.vehicleImages[0]);
  }
}
