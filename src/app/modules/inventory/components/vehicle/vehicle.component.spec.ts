import { ComponentFixture, TestBed } from '@angular/core/testing';
import { convertInventoryVehicle } from 'src/app/models/inventory-vehicle';
import { VehicleComponent } from './vehicle.component';
import inventoryvehicles from '../../../../tests/data/inventoryvehicles.json';
import vehicles from '../../../../tests/data/vehicles.json';
import Vehicle, { convertVehicle } from '../../../../models/vehicle';

describe('VehicleComponent', () => {
  let component: VehicleComponent;
  let fixture: ComponentFixture<VehicleComponent>;
  let htmlElement: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleComponent);
    component = fixture.componentInstance;
    component.inventoryVehicle = convertInventoryVehicle(
      inventoryvehicles[0],
    );
    component.vehicle = component.inventoryVehicle.vehicle;
    htmlElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain information about a given vehicle', () => {
    expect(component.vehicle.make).toEqual('Honda');
    expect(component.vehicle.model).toEqual('Civic');
    expect(component.vehicle.year).toEqual(2002);
    expect(component.vehicle.color).toEqual('red');
    expect(component.inventoryVehicle.price).toEqual(6000);
    expect(component.vehicle.miles).toEqual(110);
  });

  it('should render the elements displaying information about the vehicle', () => {
    expect(htmlElement.querySelector('#image')).toBeTruthy();
    expect(htmlElement.querySelector('#vehicle-type')).toBeTruthy();
    expect(htmlElement.querySelector('#vehicle-info')).toBeTruthy();
  });
});
