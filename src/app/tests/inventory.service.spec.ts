import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { InventoryService } from '../services/inventory.service';
import { HttpClient } from '@angular/common/http';
import vehicles from './data/vehicles.json';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import Vehicle, { convertVehicle } from '../models/vehicle';
import { of } from 'rxjs';
import { InventoryServiceAbstract } from '../services/InventoryAbstract';

const TOYOTA_VIN = '123';

const TEST_VEHICLE_JSON = {
  make: 'AMONG',
  model: 'US',
  year: 2004,
  miles: 220,
  color: 'sus',
  images: ['vent'],
  vin: '666',
  offerPrice: 123,
  sellingPrice: 124,
  seller: 1,
};

describe('InventoryService', () => {
  let service: InventoryService;
  let httpService: HttpClient;

  const mockVehicles: Vehicle[] = vehicles.map((v) =>
    convertVehicle(v),
  );

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [InventoryServiceAbstract],
    });
    service = TestBed.inject(InventoryService);
    httpService = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('httpget the mock vehicles should be functional', () => {
    spyOn(httpService, 'get').and.returnValue(of(mockVehicles));
    service.getAllVehicles().subscribe((data) => {
      expect(data).toEqual(mockVehicles);
    });
  });
});
