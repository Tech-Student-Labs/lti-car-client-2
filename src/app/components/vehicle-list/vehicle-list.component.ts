import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css'],
})
export class VehicleListComponent implements OnInit {
  //TODO inject service
  constructor() {}

  vehicles: Vehicle[] = [];

  ngOnInit(): void {}
}
