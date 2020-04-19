import { element } from 'protractor';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  constructor(private http: HttpClient) {}

  getClients() {
    return this.http.get(`${environment.backendUrl}clients`);
  }
  getClient(id) {
    return this.http.get(`${environment.backendUrl}clients/${id}`);
  }

  add(form) {
    return this.http.post(`${environment.backendUrl}clients`, form);
  }
  delete(id) {
    return this.http.delete(`${environment.backendUrl}clients/${id}`);
  }
  edit(form) {
    return this.http.put(`${environment.backendUrl}clients/${form.id}`, form);
  }
}
