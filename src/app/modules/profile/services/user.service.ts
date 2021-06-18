import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint = 'http://localhost:5000/Vehicle';

  constructor(private http: HttpClient) {}

  getUserProfile() {

  }

}
