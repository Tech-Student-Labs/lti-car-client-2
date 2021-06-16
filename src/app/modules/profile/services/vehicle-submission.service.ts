import { Injectable } from '@angular/core';
import Vehicle from '../../../models/vehicle';
import { Observable, of } from 'rxjs';
import Submission from '../../../models/submission';

@Injectable({
  providedIn: 'root',
})
export class VehicleSubmissionService {
  vehicleSubmissions: Submission[] = [];
  constructor() {}

  addSubmission(vehicle: Vehicle): void {
    this.vehicleSubmissions.push(new Submission(vehicle));
  }

  getByUser(userId: number): Observable<Submission[]> {
    return of(
      this.vehicleSubmissions.filter((element) => {
        return element.vehicle.userId === userId;
      }),
    );
  }

  getByVIN(vin: string): Observable<Submission> {
    return of(
      this.vehicleSubmissions.find((element) => {
        return element.vehicle.vin === vin;
      }),
    );
  }

  removeSubmission(vin: string): void {
    this.vehicleSubmissions = this.vehicleSubmissions.filter(
      (element) => {
        return element.vehicle.vin !== vin;
      },
    );
  }

  updateStatus(vin: string, status: number): void {
    this.getByVIN(vin).subscribe((data) => {
      data.status = status;
    });
  }

  getAll(): Observable<Submission[]> {
    return of(this.vehicleSubmissions);
  }


  getByID(id: string): Observable<Submission> {
    return of(
      this.vehicleSubmissions.find((element) => {
        // return element.vehicle.id === id;
      }),
    );
  }
}
