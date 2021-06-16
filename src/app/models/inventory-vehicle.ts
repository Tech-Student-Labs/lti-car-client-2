import Vehicle from './vehicle';

export default class InventoryVehicle {
  id: number;
  vehicleId: number;
  vehicle: Vehicle;
  price: number;
}

// Converts json to InventoryVehicle
export const convertInventoryVehicle = (
  data: object,
): InventoryVehicle => Object.assign(new InventoryVehicle(), data);
