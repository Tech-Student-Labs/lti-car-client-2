import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { InventoryServiceAbstract } from './InventoryAbstract';
import Vehicle from '../../../models/vehicle';

@Injectable({
  providedIn: 'root',
})

/*
InventoryService
Handles data of the inventory. Currently most implementation is commented out to allow mock data from abstract class to be used.
*/
export class InventoryService extends InventoryServiceAbstract {
  public endpoint: string = 'https://localhost:5001/Vehicle';

  constructor(private http: HttpClient) {
    super();
  }

  // Commented out so the service uses mock data from the abstract
  getAllVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.endpoint, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })}).pipe(
      tap((data) => {
        this.vehicles = data;
      })
    );
  }
}
