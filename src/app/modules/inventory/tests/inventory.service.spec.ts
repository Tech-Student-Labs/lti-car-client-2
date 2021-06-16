import { TestBed } from '@angular/core/testing';
import { InventoryService } from '../services/inventory.service';
import { HttpClient } from '@angular/common/http';
import inventoryvehicles from '../../../tests/data/inventoryvehicles.json';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import InventoryVehicle, {
  convertInventoryVehicle,
} from '../../../models/inventory-vehicle';
import { of } from 'rxjs';
import { InventoryServiceAbstract } from '../services/InventoryAbstract';

describe('InventoryService', () => {
  let service: InventoryService;
  let httpService: HttpClient;

  const mockVehicles: InventoryVehicle[] = inventoryvehicles.map(
    (v) => convertInventoryVehicle(v),
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

  it('service should have an endpoint that points towards inventory', () => {
    expect(
      service.endpoint.substring(service.endpoint.length - 9),
    ).toEqual('Inventory');
  });

  it('getAllVehicles should return all the inventory vehicles from the API', () => {
    spyOn(httpService, 'get').and.returnValue(of(mockVehicles));
    service.getAllVehicles().subscribe((data) => {
      expect(data).toEqual(mockVehicles);
    });
  });
});
