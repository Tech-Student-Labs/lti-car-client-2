import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsComponent } from '../components/about-us/about-us.component';

describe('AboutUsComponent', () => {
  let component: AboutUsComponent;
  let fixture: ComponentFixture<AboutUsComponent>;
  let element;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutUsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title', () => {
    expect(element.querySelector('#title')).toBeDefined();
  });
  it('should render the comany email', () => {
    expect(element.querySelector('#email')).toBeDefined();
  });
  it('should render the company phone number', () => {
    expect(element.querySelector('#phoneNum')).toBeDefined();
  });
  it('should render the company location', () => {
    expect(element.querySelector('#location')).toBeDefined();
  });
  it('should render the description of the company', () => {
    expect(element.querySelector('#description')).toBeDefined();
  });
});
