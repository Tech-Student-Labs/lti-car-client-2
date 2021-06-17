import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { SignupComponent } from '../components/signup/signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let element;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,
        FormsModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ SignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the Name txt box', () => {
    expect(element.querySelector('#Name')).toBeDefined();
  })
  it('should render the email txt box', () => {
    expect(element.querySelector('#Email')).toBeDefined();
  })
  it('should render the Username txt box', () => {
    expect(element.querySelector('#Username')).toBeDefined();
  })
  it('should render the password txt box', () => {
    expect(element.querySelector('#Password')).toBeDefined();
  })
  it('should render the button', () => {
    expect(element.querySelector('#submit')).toBeDefined();
  })
  it('Check To see if validation for password works', () => {
    const pass = component.signupForm;
    expect(pass?.valid).toBeFalse();
    pass.setValue({Password:"LegitPass443", PasswordConfirm:"NotLegitPass443", userName:"user5", Name:"jim45", Email:"jim@him.skim"});
    fixture.detectChanges();
    expect(pass?.valid).toBeFalse();
    pass.setValue({Password:"LegitPass443", PasswordConfirm:"LegitPass443", userName:"user5", Name:"jim45", Email:"jim@him.skim"});
    fixture.detectChanges();
    expect(pass?.valid).toBeTruthy();
  });
  it('check to see if validation for Username work', () => {
    const pass = component.signupForm;
    expect(pass?.valid).toBeFalse();
    pass.setValue({Password:"LegitPass443", PasswordConfirm:"LegitPass443", userName:"u", Name:"jim45", Email:"jim@him.skim"});
    fixture.detectChanges();
    expect(pass?.valid).toBeFalse();
    pass.setValue({Password:"LegitPass443", PasswordConfirm:"LegitPass443", userName:"aaaaaaaaaaaaaaaa", Name:"jim45", Email:"jim@him.skim"});
    fixture.detectChanges();
    expect(pass?.valid).toBeFalse();
    pass.setValue({Password:"LegitPass443", PasswordConfirm:"LegitPass443", userName:"user5", Name:"jim45", Email:"jim@him.skim"});
    fixture.detectChanges();
    expect(pass?.valid).toBeTruthy();
  })
  it('checks to see if the validation for the email works', () => {
    const pass = component.signupForm;
    expect(pass?.valid).toBeFalse();
    pass.setValue({Password:"LegitPass443", PasswordConfirm:"LegitPass443", userName:"user5", Name:"jim45", Email:"j"});
    fixture.detectChanges();
    expect(pass?.valid).toBeFalse();
    pass.setValue({Password:"LegitPass443", PasswordConfirm:"LegitPass443", userName:"user5", Name:"jim45", Email:"jjjjjjjjjjjjjjjjjjjjjjjjjjjj"});
    fixture.detectChanges();
    expect(pass?.valid).toBeFalse();
    pass.setValue({Password:"LegitPass443", PasswordConfirm:"LegitPass443", userName:"user5", Name:"jim45", Email:"jim@him.skim"});
    fixture.detectChanges();
    expect(pass?.valid).toBeTruthy();
  })
  it('checks to see if the validation for the name works', () => {
    const pass = component.signupForm;
    expect(pass?.valid).toBeFalse();
    pass.setValue({Password:"LegitPass443", PasswordConfirm:"LegitPass443", userName:"user5", Name:"j5", Email:"jim@him.skim"});
    fixture.detectChanges();
    expect(pass?.valid).toBeFalse();
    pass.setValue({Password:"LegitPass443", PasswordConfirm:"LegitPass443", userName:"user5", Name:"jjjjjjjjjjjjjjjj", Email:"jim@him.skim"});
    fixture.detectChanges();
    expect(pass?.valid).toBeFalse();
    pass.setValue({Password:"LegitPass443", PasswordConfirm:"LegitPass443", userName:"user5", Name:"jim45", Email:"jim@him.skim"});
    fixture.detectChanges();
    expect(pass?.valid).toBeTruthy();
  })
});
