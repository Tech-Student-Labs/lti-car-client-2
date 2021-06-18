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
export class VehicleService {
  endpoint = 'http://localhost:5000/Vehicle';

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
          let redirectUri: string;
          if (typeof response.headers !== 'undefined') {
            redirectUri = response.headers.get('location');
          } else {
            redirectUri = '/submission';
          }
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
