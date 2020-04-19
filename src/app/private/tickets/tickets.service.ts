import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  constructor(private http: HttpClient) {}
  getTickets() {
    return this.http.get(`${environment.backendUrl}tickets`);
  }
  getTicket(id) {
    return this.http.get(`${environment.backendUrl}tickets/${id}`);
  }
  add(form) {
    return this.http.post(`${environment.backendUrl}tickets`, form);
  }
  delete(id) {
    return this.http.delete(`${environment.backendUrl}tickets/${id}`);
  }
  edit(form) {
    return this.http.put(`${environment.backendUrl}tickets/${form.id}`, form);
  }
}
