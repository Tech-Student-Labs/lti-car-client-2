import { Injectable } from '@angular/core';
import Vehicle from '../../../models/vehicle';
import { Observable, of } from 'rxjs';
import Submission from '../../../models/submission';
import VehicleImage from '../../../models/vehicle-image';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class VehicleSubmissionService {
  endpoint = 'https://localhost:5001/Vehicle';

  constructor(private http: HttpClient) {}

  addSubmission(vehicle: Vehicle): string {
    this.http
      .post(this.endpoint, vehicle, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        observe: 'response',
      })
      .subscribe(
        (response) => {
          const redirectUri: string = response.headers.get(
            'location',
          );
          // TODO: remove this, and just redirect
          alert('Vehicle successfully submitted!');
          return redirectUri;
        },
        (err) => {
          alert('Vehicle could not be submitted. Please try again.');
        },
      );
    return '/submission';
  }

  getByID(id: number): Observable<Vehicle> {
    return this.http.get<Vehicle>(this.endpoint + '/' + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  imageToBase64 = (file: File) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
}

// getByUser(userId: number): Observable<Submission[]> {
//   return of(
//     this.vehicleSubmissions.filter((element) => {
//       return element.vehicle.userId === userId;
//     }),
//   );
// }
//
// getByVIN(vin: string): Observable<Submission> {
//   return of(
//     this.vehicleSubmissions.find((element) => {
//       return element.vehicle.vin === vin;
//     }),
//   );
// }
//
// removeSubmission(vin: string): void {
//   this.vehicleSubmissions = this.vehicleSubmissions.filter(
//     (element) => {
//       return element.vehicle.vin !== vin;
//     },
//   );
// }
//
// updateStatus(vin: string, status: number): void {
//   this.getByVIN(vin).subscribe((data) => {
//     data.status = status;
//   });
// }
//
// getAll(): Observable<Submission[]> {
//   return of(this.vehicleSubmissions);
// }
