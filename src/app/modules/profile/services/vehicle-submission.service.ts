import { Injectable } from '@angular/core';
import Vehicle from '../../../models/vehicle';
import { Observable, of } from 'rxjs';
import Submission from '../../../models/submission';
import VehicleImage from '../../../models/vehicle-image';

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

  convertVehicleImagesToString(files): VehicleImage[] {
    // tslint:disable-next-line:prefer-const
    let images: VehicleImage[];
    const fileReader = new FileReader();
    // for (let i = 0; i < files.length; i++) {
    // tslint:disable-next-line:prefer-const
    let vehicleImage = new VehicleImage();
    vehicleImage.imageData =
      'data:image/jpg;base64,' +
      fileReader.readAsBinaryString(files[0]);
    images.push(vehicleImage);
    // }
    return images;
  }
}
