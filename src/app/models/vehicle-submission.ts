import Vehicle from './vehicle';

export class VehicleSubmission {
  // TODO change this to enum?
  status: string;
  vehicle: Vehicle;

  constructor(status: string, vehicle: Vehicle) {
    this.status = status;
    this.vehicle = vehicle;
  }
}
