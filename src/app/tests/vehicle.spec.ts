import Vehicle, { convertVehicle } from '../models/vehicle';

import vehicles from '../tests/data/vehicles.json';

describe('Vehicle', () => {
  it('should create an instance', () => {
    expect(new Vehicle()).toBeTruthy();
  });

  it('vehicle conversion', () => {
    let vehicle: Vehicle = convertVehicle(vehicles[0]);

    expect(vehicle).toBeDefined();
    expect(vehicle.model).toBe('Corolla');
  });
});
