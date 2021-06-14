import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let element;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,
        FormsModule],
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
  it('Check To see if password confirmation works', () => {
    const pass = component.signupForm;
    expect(pass?.valid).toBeFalse();
    pass.setValue({Password:"LegitPass443", PasswordConfirm:"NotLegitPass443", userName:"user5", Name:"jim45", Email:"jim@him.skim"});
    fixture.detectChanges();
    expect(pass?.valid).toBeFalse();
    pass.setValue({Password:"LegitPass443", PasswordConfirm:"LegitPass443", userName:"user5", Name:"jim45", Email:"jim@him.skim"});
    fixture.detectChanges();
    expect(pass?.valid).toBeTruthy();
  });
});
