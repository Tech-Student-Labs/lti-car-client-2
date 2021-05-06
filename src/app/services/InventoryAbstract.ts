import { Observable, of } from 'rxjs';
import vehicles from '../tests/data/vehicles.json';
import Vehicle, { convertVehicle } from '../models/vehicle';

export abstract class InventoryServiceAbstract {
  public vehicles: Vehicle[] = vehicles.map((data) =>
    convertVehicle(data),
  );

  public getAllVehicles(): Observable<Vehicle[]> {
    return of(this.vehicles);
  }

  public getByVIN(vin: string): Observable<Vehicle> {
    return of(this.vehicles.find((v) => v.vin == vin));
  }

  public changeSalePrice(vin: string, price: number): void {
    this.getByVIN(vin).subscribe((vehicle) =>
      vehicle.changePrice(price),
    );
  }
}
