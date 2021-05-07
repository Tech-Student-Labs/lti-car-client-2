import { TestBed } from '@angular/core/testing';

import { VehicleSubmissionService } from '../services/vehicle-submission.service';

describe('VehicleSubmissionService', () => {
  let service: VehicleSubmissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleSubmissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
