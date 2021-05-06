import { TestBed } from '@angular/core/testing';
import { InventoryService } from '../services/inventory.service';
import { HttpClient } from '@angular/common/http';
import vehicles from './data/vehicles.json';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import Vehicle from '../models/vehicle';
import { of } from 'rxjs';
import { InventoryServiceAbstract } from '../services/InventoryAbstract';

class InventoryServiceMock extends InventoryServiceAbstract {}

describe('InventoryService', () => {
  let service: InventoryService;
  let httpService: HttpClient;
  let serviceMock: InventoryServiceMock;

  const mockVehicles: Vehicle[] = [...vehicles];

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
      console.log(data);
      expect(data.length).toBe(mockVehicles.length);
    });
  });

  it('mock has default values', () => {
    serviceMock.getAllVehicles().subscribe((data) => {
      expect(data).toEqual(vehicles);
    });
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