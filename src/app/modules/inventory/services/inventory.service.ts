import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { InventoryServiceAbstract } from './InventoryAbstract';
import InventoryVehicle from '../../../models/inventory-vehicle';

@Injectable({
  providedIn: 'root',
})

/*
InventoryService
Handles data of the inventory. Currently most implementation is commented out to allow mock data from abstract class to be used.
*/
export class InventoryService extends InventoryServiceAbstract {
  public endpoint = 'http://localhost:5000/Inventory';

  constructor(private http: HttpClient) {
    super();
  }

  getAllVehicles(): Observable<InventoryVehicle[]> {
    return this.http
      .get<InventoryVehicle[]>(this.endpoint, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .pipe(
        tap((data) => {
          this.vehicles = data;
        }),
      );
  }
}
