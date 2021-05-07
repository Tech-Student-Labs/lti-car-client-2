import { ComponentFixture, TestBed } from '@angular/core/testing';
import Vehicle, { convertVehicle } from 'src/app/models/vehicle';
import { InventoryService } from 'src/app/modules/inventory/services/inventory.service';
import { InventoryServiceAbstract } from 'src/app/modules/inventory/services/InventoryAbstract';
import { VehicleComponent } from './vehicle.component';
import vehicles from '../../../../tests/data/vehicles.json';

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
    component.vehicle = convertVehicle(vehicles[0]);
    htmlElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain information about a given vehicle', () => {
    expect(component.vehicle.make).toEqual('Toyota');
    expect(component.vehicle.model).toEqual('Corolla');
    expect(component.vehicle.vin).toEqual('123');
    expect(component.vehicle.color).toEqual('red');
  });

  it('should render the elements displaying information about the vehicle', () => {
    expect(htmlElement.querySelector('#make')).toBeTruthy;
    expect(htmlElement.querySelector('#model')).toBeTruthy;
    expect(htmlElement.querySelector('#year')).toBeTruthy;
    expect(htmlElement.querySelector('#thumbnail')).toBeTruthy;
  });
});
