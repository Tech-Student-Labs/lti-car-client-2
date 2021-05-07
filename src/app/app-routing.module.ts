import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoginComponent } from './components/login/login.component';
import { VehicleListComponent } from './modules/inventory/components/vehicle-list/vehicle-list.component';
import { SubmissionFormComponent } from './modules/profile/components/submission-form/submission-form.component';

export const routes: Routes = [
  { path: '', component: VehicleListComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'submission', component: SubmissionFormComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
