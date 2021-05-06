import { TestBed } from '@angular/core/testing';
import { InventoryService } from '../services/inventory.service';
import { HttpClient } from '@angular/common/http';
import vehicles from './data/vehicles.json';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import Vehicle, { convertVehicle } from '../models/vehicle';
import { of } from 'rxjs';
import { InventoryServiceAbstract } from '../services/InventoryAbstract';

class InventoryServiceMock extends InventoryServiceAbstract {}

const TOYOTA_VIN = '123';

describe('InventoryService', () => {
  let service: InventoryService;
  let httpService: HttpClient;
  let serviceMock: InventoryServiceMock;

  const mockVehicles: Vehicle[] = vehicles.map((v) =>
    convertVehicle(v),
  );

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [],
    });
    service = TestBed.inject(InventoryService);

    httpService = TestBed.inject(HttpClient);
    serviceMock = TestBed.inject(InventoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAll() should get all vehicles in inventory list', () => {
    spyOn(httpService, 'get').and.returnValue(of(mockVehicles));

    service.getAllVehicles().subscribe((data) => {
      expect(data.length).toBe(mockVehicles.length);
    });
  });

  it('mock has default values', () => {
    expect(service.vehicles.length).toBeGreaterThan(0);
    expect(service.vehicles).toEqual(mockVehicles);
  });

  it('getByVIN() should get one vehicle by searching for its vin number', () => {
    expect(service).toBeTruthy();

    service.getByVIN(TOYOTA_VIN).subscribe((data) => {
      expect(data).toBeDefined();
      expect(data.model).toBe('Corolla');
    });
  });

  it('changeSalePrice() should change the sale price of a vehicle', () => {
    const newPrice = 2500;

    expect(service).toBeTruthy();
    service.getByVIN(TOYOTA_VIN).subscribe((data) => {
      expect(data.sellingPrice).not.toBe(newPrice);
    });

    service.changeSalePrice(TOYOTA_VIN, 2500);

    service.getByVIN(TOYOTA_VIN).subscribe((data) => {
      expect(data.sellingPrice).toBe(newPrice);
    });
  });

  // it('sold() should delete the vehicle from inventory', () => {
  //   expect(service).toBeTruthy();
  // });

  // it('addVehicle() should add a vehicle to the inventory', () => {
  //   expect(service).toBeTruthy();
  // });
});
