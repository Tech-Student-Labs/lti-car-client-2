import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDetailsComponent } from './vehicle-details.component';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('VehicleDetailsComponent', () => {
  let component: VehicleDetailsComponent;
  let fixture: ComponentFixture<VehicleDetailsComponent>;
  let htmlElement: any;
  const htmlIds = [
    '#vehicle-images',
    '#make',
    '#model',
    '#year',
    '#vin',
    '#miles',
    '#color',
    '#price',
    '#owner',
    '#status',
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleDetailsComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleDetailsComponent);
    component = fixture.componentInstance;
    htmlElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all html elements', () => {
    htmlIds.forEach((id) =>
      expect(htmlElement.querySelector(id).toBeTruthy()),
    );
  });
});
