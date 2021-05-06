import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { InventoryModule } from './modules/inventory/inventory.module';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, InventoryModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
