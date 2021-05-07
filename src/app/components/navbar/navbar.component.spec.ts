import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('checks for html elements', () => {
    const navbarDiv = fixture.nativeElement.querySelector(
      '#navbarNav',
    );
    const navbarBrand = fixture.nativeElement.querySelector(
      '.navbar-brand',
    );
    const loginButton: HTMLInputElement = fixture.nativeElement.querySelector(
      '#login',
    );
    expect(navbarDiv).toBeDefined();
    expect(navbarBrand).toBeDefined();
    expect(loginButton).toBeDefined();
    expect(loginButton.innerHTML.trim()).toEqual('Login');
  });
});
