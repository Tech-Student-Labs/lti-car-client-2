import { TestBed } from '@angular/core/testing';

import { VehicleService } from '../services/vehicle-service';
import Vehicle, { convertVehicle } from '../../../models/vehicle';
import testVehicles from '../../../tests/data/vehicles.json';
import { Status } from '../../../models/submission';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
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
    spyOn(http, 'post').and.returnValue(of(testVehicle));
    expect(
      service.addSubmission(convertVehicle(testVehicle)),
    ).toBeTruthy();
  });

  it('should be able to get a vehicle by id', () => {
    let returnedVehicle: Vehicle;
    spyOn(http, 'get').and.returnValue(of(testVehicle));
    service.getByID(1).subscribe((data) => (returnedVehicle = data));
    expect(returnedVehicle.id).toBe(testVehicle.id);
  });

  //
  // it('should be able to get a vehicle by VIN', () => {
  //   service.addSubmission(convertVehicle(testVehicle));
  //   service.getByVIN(testVehicle.vin).subscribe((data) => {
  //     expect(data.vehicle.vin).toEqual(testVehicle.vin);
  //   });
  // });
  //
  // it('should be able to remove a vehicle submission', () => {
  //   service.addSubmission(convertVehicle(testVehicle));
  //   service.removeSubmission(testVehicle.vin);
  //   expect(service.vehicleSubmissions.length).toEqual(0);
  // });
  //
  // it('should be able to update the status of a vehicle submission', () => {
  //   service.addSubmission(convertVehicle(testVehicle));
  //   service.updateStatus(testVehicle.vin, Status.Accepted);
  //   service.getByVIN(testVehicle.vin).subscribe((data) => {
  //     expect(data.status).toEqual(Status.Accepted);
  //   });
  // });
  //
  // it('should be able to get all the vehicle submissions', () => {
  //   service.addSubmission(convertVehicle(testVehicle));
  //   service.getAll().subscribe((data) => {
  //     expect(data.length).toEqual(1);
  //   });
  // });
});
