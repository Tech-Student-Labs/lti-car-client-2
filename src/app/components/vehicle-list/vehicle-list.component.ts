import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import Vehicle from '../../models/vehicle';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css'],
})
export class VehicleListComponent implements OnInit {
  constructor(private inventoryService: InventoryService) {}

  vehicles: Vehicle[] = [];

  ngOnInit(): void {
    this.inventoryService.getAllVehicles().subscribe((data) => {
      this.vehicles = data;
    });
  }
}
