import VehicleImage from './vehicle-image';

export default class Vehicle {
  id: number;
  vin: string;
  make: string;
  model: string;
  year: number;
  miles: number;
  color: string;
  vehicleImages: VehicleImage[];
  sellingPrice: number;
  userId: number;
  status: statusCode;

  constructor() {
    this.vehicleImages = [];
  }

  public changePrice(newPrice: number): void {
    this.sellingPrice = newPrice;
  }
}

enum statusCode {
  Pending,
  Inventory,
  Sold,
}

/*
Takes a json for vehicle data and returns a instance of Vehicle
*/
export const convertVehicle = (data: object): Vehicle =>
  Object.assign(new Vehicle(), data);
