import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) {}

  getClients() {
    return this.http.get(`${environment.backendUrl}clients`);
  }

  // Funckaj add(formularz) {
    // this.http.post(`${environment.backendUrl}clients`, formularz)
}
