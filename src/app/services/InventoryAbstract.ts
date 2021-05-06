import { Observable, of } from 'rxjs';
import vehicles from '../tests/data/vehicles.json';
import Vehicle from '../models/vehicle';

export abstract class InventoryServiceAbstract {
  public vehicles: Vehicle[] = vehicles.map((data) =>
    Object.assign(new Vehicle(), data),
  );

  public getAllVehicles(): Observable<Vehicle[]> {
    return of(this.vehicles);
  }
}
