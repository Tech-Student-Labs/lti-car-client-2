import Submission, { Status } from '../models/submission';
import Vehicle, { convertVehicle } from '../models/vehicle';
import vehicles from '../tests/data/vehicles.json';

describe('Vehicle', () => {
  let vehicle: Vehicle;
  let submission: Submission;

  beforeEach(() => {
    vehicle = convertVehicle(vehicles[0]);
  });

  it('should create an instance', () => {
    expect(new Submission('1', vehicle)).toBeTruthy();
  });

  it('status should be pending', () => {
    expect();
  });
});
