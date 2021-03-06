import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor(private http: HttpClient) {}
     getUserlist () {
    return this.http.get(`${environment.backendUrl}users`);
  }
}
