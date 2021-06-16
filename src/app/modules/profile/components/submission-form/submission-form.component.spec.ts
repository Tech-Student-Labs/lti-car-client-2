import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionFormComponent } from './submission-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehicleSubmissionService } from '../../services/vehicle-submission.service';
import { InventoryService } from '../../../inventory/services/inventory.service';
import { InventoryServiceAbstract } from '../../../inventory/services/InventoryAbstract';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SubmissionFormComponent', () => {
  let component: SubmissionFormComponent;
  let fixture: ComponentFixture<SubmissionFormComponent>;
  let htmlElement: any;
  const submissionIds = [
    '#make-submission',
    '#model-submission',
    '#year-submission',
    '#vin-submission',
    '#miles-submission',
    '#color-submission',
    '#images-submission',
    '#price-submission',
    '#submit-submission',
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [SubmissionFormComponent],
      providers: [{ provide: VehicleSubmissionService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionFormComponent);
    component = fixture.componentInstance;
    htmlElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render vehicle submission forms', () => {
    submissionIds.forEach((htmlID) =>
      expect(htmlElement.querySelector(htmlID)).toBeTruthy(),
    );
  });
  it('should call onSubmit method when submit button is clicked', () => {
    spyOn(component, 'onSubmit');
    htmlElement.querySelector('#submit-submission').click();
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });

  // it('should call processImages when an image is selected', () => {
  //   spyOn(component, 'processImages');
  //   htmlElement.querySelector('#images-submission').file = 'FakePath';
  //   fixture.detectChanges();
  //   expect(component.processImages).toHaveBeenCalledTimes(1);
  // });
});
