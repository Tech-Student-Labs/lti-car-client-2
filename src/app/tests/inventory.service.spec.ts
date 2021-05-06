import { TestBed } from '@angular/core/testing';
import { InventoryService } from '../services/inventory.service';
import { HttpClient } from '@angular/common/http';
import vehicles from './data/vehicles.json';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import Vehicle from '../models/Vehicle';
import { of } from 'rxjs';

describe('InventoryService', () => {
  let service: InventoryService;
  let httpService: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(InventoryService);

    httpService = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAll() should get all vehicles in inventory list', () => {
    /*
    Vehicle
    --------
    Make
    Model
    Year
    Color
    BoughtPrice
    SalePrice
    VIN
    */

    const mockVehicles: Vehicle[] = [...vehicles];

    spyOn(httpService, 'get').and.returnValue(of(mockVehicles));

    service.getAllVehicles();

    expect(service.vehicles).toBeDefined();
  });

  it('getByVIN() should get one vehicle by searching for its vin number', () => {
    expect(service).toBeTruthy();
  });

  it('changeSalePrice() should change the sale price of a vehicle', () => {
    expect(service).toBeTruthy();
  });

  it('sold() should delete the vehicle from inventory', () => {
    expect(service).toBeTruthy();
  });

  it('addVehicle() should add a vehicle to the inventory', () => {
    expect(service).toBeTruthy();
  });
});
