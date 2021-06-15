import { TestBed } from '@angular/core/testing';

import { VehicleSubmissionService } from '../services/vehicle-submission.service';
import { convertVehicle } from '../../../models/vehicle';
import testVehicles from '../../../tests/data/vehicles.json';
import { Status } from '../../../models/submission';

describe('VehicleSubmissionService', () => {
  let service: VehicleSubmissionService;
  const testVehicle = testVehicles[0];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleSubmissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should be able to submit vehicle', () => {
  //   service.addSubmission(convertVehicle(testVehicle));
  //   service.getByUser(testVehicle.seller).subscribe((data) => {
  //     expect(data).toBeTruthy();
  //   });
  // });
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
