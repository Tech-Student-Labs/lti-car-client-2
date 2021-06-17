import { TestBed } from '@angular/core/testing';

import { VehicleService } from '../services/vehicle-service';
import Vehicle, { convertVehicle } from '../../../models/vehicle';
import testVehicles from '../../../tests/data/vehicles.json';
import { Status } from '../../../models/submission';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';

describe('VehicleSubmissionService', () => {
  let service: VehicleService;
  const testVehicle = testVehicles[0];
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(VehicleService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to submit vehicle', () => {
    spyOn(http, 'post').and.returnValue(
      of({
        body: testVehicle,
        headers: new HttpHeaders(),
      }),
    );
    expect(service.addSubmission(convertVehicle(testVehicle))).toBe(
      '/submission',
    );
  });

  it('should be able to get a vehicle by id', () => {
    let returnedVehicle: Vehicle;
    spyOn(http, 'get').and.returnValue(of(testVehicle));
    service.getByID(1).subscribe((data) => (returnedVehicle = data));
    expect(returnedVehicle.id).toBe(testVehicle.id);
  });
});
