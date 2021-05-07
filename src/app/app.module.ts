import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { InventoryModule } from './modules/inventory/inventory.module';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileModule } from './modules/profile/profile.module';
import { AboutUsComponent } from './components/about-us/about-us.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, AboutUsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InventoryModule,
    ProfileModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
