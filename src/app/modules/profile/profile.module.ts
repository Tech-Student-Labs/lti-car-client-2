import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from 'src/app/modules/profile/components/profile/profile.component';
import { SubmissionFormComponent } from 'src/app/modules/profile/components/submission-form/submission-form.component';
import { SubmissionHistoryComponent } from 'src/app/modules/profile/components/submission-history/submission-history.component';
import { SubmissionHistoryVehicleComponent } from 'src/app/modules/profile/components/submission-history-vehicle/submission-history-vehicle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ProfileComponent,
    SubmissionFormComponent,
    SubmissionHistoryComponent,
    SubmissionHistoryVehicleComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule],
})
export class ProfileModule {}
