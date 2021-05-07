import { TestBed } from '@angular/core/testing';

import { VehicleSubmissionService } from '../services/vehicle-submission.service';
import { VehicleSubmission } from '../../../models/vehicle-submission';
import Vehicle, { convertVehicle } from '../../../models/vehicle';
import testVehicles from '../../../tests/data/vehicles.json';

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

  it('should be able to submit vehicle', () => {
    service.addSubmission(convertVehicle(testVehicle));
    service.getByUser(testVehicle.seller).subscribe((data) => {
      expect(data).toBeTruthy();
    });
  });
});
