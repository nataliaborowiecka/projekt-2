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
  getUser(id) {
    return this.http.get(`${environment.backendUrl}users/${id}`);
  }
  add(form) {
    return this.http.post(`${environment.backendUrl}users`, form);
  }
  edit(form) {
    return this.http.put(`${environment.backendUrl}users/${form.id}`, form)
  }
  delete(id) {
    return this.http.delete(`${environment.backendUrl}users/${id}`)
  }
}
