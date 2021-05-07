import Vehicle from './vehicle';

export enum Status {
  Pending,
  Accepted,
  Declined,
}

export default class Submission {
  vehicle: Vehicle;
  status: Status;

  constructor(vehicle: Vehicle) {
    this.status = Status.Pending;
    this.vehicle = vehicle;
  }

  public declineSubmission(): void {
    this.status = Status.Declined;
  }

  public acceptSubmission(): void {
    this.status = Status.Accepted;
  }

  public isPending(): boolean {
    return this.status === Status.Pending;
  }
}
