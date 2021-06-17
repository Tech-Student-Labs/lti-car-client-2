import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { VehicleListComponent } from './modules/inventory/components/vehicle-list/vehicle-list.component';
import { ProfileComponent } from './modules/profile/components/profile/profile.component';
import { SubmissionFormComponent } from './modules/profile/components/submission-form/submission-form.component';
import { VehicleDetailsComponent } from './modules/profile/components/vehicle-details/vehicle-details.component';

export const routes: Routes = [
  { path: '', component: VehicleListComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'submission', component: SubmissionFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'vehicle/:id', component: VehicleDetailsComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
