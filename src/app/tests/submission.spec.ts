import { single } from 'rxjs/operators';
import Submission, { Status } from '../models/submission';
import Vehicle, { convertVehicle } from '../models/vehicle';
import vehicles from '../tests/data/vehicles.json';

describe('Vehicle', () => {
  let vehicle: Vehicle;
  let submission: Submission;

  beforeEach(() => {
    vehicle = convertVehicle(vehicles[0]);
    submission = new Submission('1', vehicle);
  });

  it('should create an instance', () => {
    expect(submission).toBeTruthy();
  });

  it('status should be pending', () => {
    expect(submission.isPending()).toBeTruthy();
  });

  it('decline and accept submissions', () => {
    submission.acceptSubmission();
    expect(submission.status).toBe(Status.Accepted);
    submission.declineSubmission();
    expect(submission.status).toBe(Status.Declined);
  });
});
