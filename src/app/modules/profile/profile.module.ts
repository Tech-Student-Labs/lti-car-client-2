import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from 'src/app/components/profile/profile.component';
import { SubmissionFormComponent } from 'src/app/components/submission-form/submission-form.component';
import { SubmissionHistoryComponent } from 'src/app/components/submission-history/submission-history.component';
import { SubmissionHistoryVehicleComponent } from 'src/app/components/submission-history-vehicle/submission-history-vehicle.component';

@NgModule({
  declarations: [
    ProfileComponent,
    SubmissionFormComponent,
    SubmissionHistoryComponent,
    SubmissionHistoryVehicleComponent,
  ],
  imports: [CommonModule],
})
export class ProfileModule {}
