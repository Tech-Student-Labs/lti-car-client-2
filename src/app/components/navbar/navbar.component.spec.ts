import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';
import { NavbarComponent } from './navbar.component';

import { Location } from '@angular/common';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [NavbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
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
    expect(navbarDiv).toBeTruthy();
    expect(navbarBrand).toBeTruthy();
    expect(loginButton).toBeTruthy();
    expect(loginButton.innerHTML.trim()).toEqual('Login');
  });

  it('tests links', fakeAsync(() => {
    const loginButton: HTMLInputElement = fixture.nativeElement.querySelector(
      '#login',
    );
    loginButton.click();
    tick();
    fixture.detectChanges();
    expect(location.path()).toEqual('/login');
  }));

  it('tests routes', fakeAsync(() => {
    const routes: string[] = [
      '/',
      '/login',
      '/submission',
      '/about-us',
    ];

    routes.forEach((route) => {
      router.navigate([route]);
      tick();
      expect(location.path()).toEqual(route);
    });
  }));
});
