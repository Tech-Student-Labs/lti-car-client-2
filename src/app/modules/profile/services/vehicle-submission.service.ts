import { Injectable } from '@angular/core';
import Vehicle from '../../../models/vehicle';
import { VehicleSubmission } from '../../../models/vehicle-submission';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehicleSubmissionService {
  vehicleSubmissions: VehicleSubmission[] = [];
  constructor() {}

  addSubmission(vehicle: Vehicle): void {
    this.vehicleSubmissions.push(
      new VehicleSubmission('pending', vehicle),
    );
  }

  getByUser(userId: number): Observable<VehicleSubmission[]> {
    return of(
      this.vehicleSubmissions.filter((element) => {
        return element.vehicle.seller === userId;
      }),
    );
  }

  getByVIN(vin: string): Observable<VehicleSubmission> {
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

  updateStatus(vin: string, status: string): void {
    this.getByVIN(vin).subscribe((data) => {
      data.status = status;
    });
  }
}
