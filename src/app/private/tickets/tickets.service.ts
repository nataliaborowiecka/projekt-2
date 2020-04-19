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
  add(form) {
    return this.http.post(`${environment.backendUrl}tickets`, form);
  }
}
