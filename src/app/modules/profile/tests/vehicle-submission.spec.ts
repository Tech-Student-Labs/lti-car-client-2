import { VehicleSubmission } from '../../../models/vehicle-submission';
import Vehicle from '../../../models/vehicle';

describe('VehicleSubmission', () => {
  it('should create an instance', () => {
    expect(
      new VehicleSubmission('pending', new Vehicle()),
    ).toBeTruthy();
  });
});
