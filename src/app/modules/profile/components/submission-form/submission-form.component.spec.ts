import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionFormComponent } from './submission-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SubmissionFormComponent', () => {
  let component: SubmissionFormComponent;
  let fixture: ComponentFixture<SubmissionFormComponent>;
  let htmlElement: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [SubmissionFormComponent],
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
    expect(
      htmlElement.querySelector('#make-submission'),
    ).toBeTruthy();
    expect(
      htmlElement.querySelector('#model-submission'),
    ).toBeTruthy();
    expect(
      htmlElement.querySelector('#year-submission'),
    ).toBeTruthy();
    expect(htmlElement.querySelector('#vin-submission')).toBeTruthy();
    expect(
      htmlElement.querySelector('#miles-submission'),
    ).toBeTruthy();
    expect(
      htmlElement.querySelector('#color-submission'),
    ).toBeTruthy();
    expect(
      htmlElement.querySelector('#images-submission'),
    ).toBeTruthy();
    expect(
      htmlElement.querySelector('#price-submission'),
    ).toBeTruthy();
  });
});
