import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthWrapperService<T> {
  http: HttpClient;

  constructor(private _http: HttpClient) {
    this.http = _http;
  }

  get(endpoint: string): Observable<T> {
    return this.http.get<T>(endpoint, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
}
