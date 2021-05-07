import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { Route, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';
import { NavbarComponent } from './navbar.component';
import { Location } from '@angular/common';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let router: Router;
  let location: Location;
  let loginButton: HTMLInputElement;
  let fixelm: any;

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
    fixelm = fixture.nativeElement;
    loginButton = fixelm.querySelector('#login');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('checks for html elements', () => {
    const htmlElements: String[] = [
      '#navbarNav',
      '.navbar-brand',
      '#login',
    ];

    htmlElements.forEach((element) => {
      let e = fixture.nativeElement.querySelector(element);
      expect(e).toBeTruthy();
    });

    expect(loginButton.innerHTML.trim()).toEqual('Login');
  });

  it('tests links', fakeAsync(() => {
    loginButton.click();
    tick();
    fixture.detectChanges();
    expect(location.path()).toEqual('/login');
  }));

  it('tests routes', fakeAsync(() => {
    routes.forEach((route: Route) => {
      router.navigate([route.path]);
      tick();
      expect(location.path()).toEqual(`/${route.path}`);
    });
  }));
});
