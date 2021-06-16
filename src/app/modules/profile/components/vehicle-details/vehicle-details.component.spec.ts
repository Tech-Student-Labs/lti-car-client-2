import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDetailsComponent } from './vehicle-details.component';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import Vehicle from '../../../../models/vehicle';

describe('VehicleDetailsComponent', () => {
  let component: VehicleDetailsComponent;
  let fixture: ComponentFixture<VehicleDetailsComponent>;
  let htmlElement: any;
  const htmlIds = [
    '#vehicle-images',
    '#year-make-model',
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
      imports: [RouterTestingModule, HttpClientTestingModule],
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

  it('should render all html elements when vehicle exists', () => {
    component.vehicle = new Vehicle();
    fixture.detectChanges();
    htmlIds.forEach((id) =>
      expect(htmlElement.querySelector(id)).toBeTruthy(),
    );
  });
});
