import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import Vehicle from '../models/Vehicle';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  public vehicles: Vehicle[] = [];

  public endpoint: string = '';

  constructor(private http: HttpClient) {
    this.getAllVehicles;
  }

  getAllVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.endpoint).pipe(
      tap((data) => {
        this.vehicles = data;
      }),
    );
  }
}
