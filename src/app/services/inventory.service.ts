import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import Vehicle from '../models/vehicle';
import { InventoryServiceAbstract } from './InventoryAbstract';

@Injectable({
  providedIn: 'root',
})
export class InventoryService extends InventoryServiceAbstract {
  public vehicles: Vehicle[];

  public endpoint: string = '';

  constructor(private http: HttpClient) {
    super();
    this.getAllVehicles();
  }

  getAllVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.endpoint).pipe(
      tap((data) => {
        this.vehicles = data;
      }),
    );
  }
}
