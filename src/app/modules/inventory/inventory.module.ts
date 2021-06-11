import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleListComponent } from 'src/app/modules/inventory/components/vehicle-list/vehicle-list.component';
import { VehicleComponent } from 'src/app/modules/inventory/components/vehicle/vehicle.component';

@NgModule({
  declarations: [VehicleListComponent, VehicleComponent],
  imports: [CommonModule],
})
export class InventoryModule {}
