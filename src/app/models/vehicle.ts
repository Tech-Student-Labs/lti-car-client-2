export default class Vehicle {
  make: string;
  model: string;
  year: number;
  miles: number;
  color: string;
  images: string[];
  vin: string;
  user: string;
  offerPrice: number;
  sellingPrice: number;
  seller: number;

  constructor() {}

  public changePrice(newPrice: number): void {
    this.sellingPrice = newPrice;
  }
}

/*
Takes a json for vehicle data and returns a instance of Vehicle
*/
export const convertVehicle = (data: object): Vehicle =>
  Object.assign(new Vehicle(), data);
