import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import User from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint : string = 'http://localhost:5000' + "/user/profile";

  constructor(private http: HttpClient) {}

  getUserProfile() : Observable<User> {
    // ROUTE: "/user/profile"

    return this.http.get<User>(this.endpoint, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
  }

}
