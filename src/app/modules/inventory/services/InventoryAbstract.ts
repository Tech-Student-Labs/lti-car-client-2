import { Observable, of } from 'rxjs';
import vehicles from '../../../tests/data/vehicles.json';
import InventoryVehicle, {
  convertInventoryVehicle,
} from '../../../models/inventory-vehicle';

export abstract class InventoryServiceAbstract {
  public vehicles: InventoryVehicle[] = vehicles.map((data) =>
    convertInventoryVehicle(data),
  );

  public getAllVehicles(): Observable<InventoryVehicle[]> {
    return of(this.vehicles);
  }

  public getByVIN(vin: string): Observable<InventoryVehicle> {
    return of(this.vehicles.find((v) => v.vehicle.vin === vin));
  }

  // TODO
  // public changeSalePrice(vin: string, price: number): void {
  //   this.getByVIN(vin).subscribe((vehicle) =>
  //     vehicle.changePrice(price),
  //   );
  // }

  public removeVehicle(vin: string): void {
    this.vehicles = this.vehicles.filter(
      (v) => v.vehicle.vin !== vin,
    );
  }

  public addVehicle(data: object): void {
    this.vehicles.push(convertInventoryVehicle(data));
  }
}
