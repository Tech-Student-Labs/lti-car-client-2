import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let element;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,
        FormsModule],
      declarations: [LoginComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should render the login button', () => {
    expect(element.querySelector('#submit')).toBeDefined();
  })

  it('should have password field with minimum 6 characters', ()=> {
    const passwordField = component.loginForm.controls.password;
    passwordField.setValue('bad');
    const errors = passwordField.errors || {}
    expect(errors.minlength).toBeTruthy();
  })
  it('should have password field with valid field', ()=> {
    const passwordField = component.loginForm.controls.password;
    passwordField.setValue('EpicPasswordFortnite');
    const errors = passwordField.errors || {}
    //There is no errors so errors is undefined
    expect(errors.minlength).toBeUndefined();
  })

  it('should have a username with a minimum of 4 characters', () => {
    const userField = component.loginForm.controls.userName;
    userField.setValue('bad');
    const errors = userField.errors || {}
    expect(errors.minlength).toBeTruthy();
  })
  it('should have a username field with valid field', () => {
    const userField = component.loginForm.controls.userName;
    userField.setValue('ForniteGamer001');
    const errors = userField.errors || {}
    expect(errors.minlength).toBeUndefined();
  })
});

