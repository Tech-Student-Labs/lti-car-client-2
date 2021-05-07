import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionHistoryVehicleComponent } from './submission-history-vehicle.component';

describe('SubmissionHistoryVehicleComponent', () => {
  let component: SubmissionHistoryVehicleComponent;
  let fixture: ComponentFixture<SubmissionHistoryVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubmissionHistoryVehicleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(
      SubmissionHistoryVehicleComponent,
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
