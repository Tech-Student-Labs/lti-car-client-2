import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleListComponent } from 'src/app/modules/inventory/components/vehicle-list/vehicle-list.component';
import { VehicleComponent } from 'src/app/modules/inventory/components/vehicle/vehicle.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [VehicleListComponent, VehicleComponent],
  imports: [CommonModule, RouterModule],
})
export class InventoryModule {}
