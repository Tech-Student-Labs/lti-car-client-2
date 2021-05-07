import Vehicle from './vehicle';

export enum Status {
  Pending,
  Accepted,
  Declined,
}

export default class Submission {
  userId: string;
  vehicle: Vehicle;
  status: Status;

  constructor(userId: string, vehicle: Vehicle) {
    this.status = Status.Pending;
    this.vehicle = vehicle;
    this.userId = userId;
  }

  public declineSubmission(): void {
    this.status = Status.Declined;
  }

  public acceptSubmission(): void {
    this.status = Status.Accepted;
  }

  public isPending(): boolean {
    return this.status == Status.Pending;
  }
}
