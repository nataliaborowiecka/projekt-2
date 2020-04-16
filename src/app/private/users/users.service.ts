import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${environment.backendUrl}users`);
  }
  add(form) {
    return this.http.post(`${environment.backendUrl}users`, form);
  }
}
