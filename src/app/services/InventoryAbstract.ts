import { Observable, of } from 'rxjs';
// @ts-ignore
import vehicles from '../tests/data/vehicles.json';
import Vehicle, { convertVehicle } from '../models/vehicle';

export abstract class InventoryServiceAbstract {
  public vehicles: Vehicle[] = vehicles.map((data) =>
    convertVehicle(data),
  );

  public getAllVehicles(): Observable<Vehicle[]> {
    return of(this.vehicles);
  }
}
