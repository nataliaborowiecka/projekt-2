import { Observable, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Ticket } from './ticket.type';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  private ticketsCollection: AngularFirestoreCollection<Ticket>;
  tickets: Observable<Ticket[]>;
  constructor(private http: HttpClient, private afs: AngularFirestore) {
    this.ticketsCollection = this.afs.collection<Ticket>('tickets');
    this.tickets = this.ticketsCollection.valueChanges();
  }
  getTickets() {
    return this.tickets;
  }
  getTicket(id) {
    return this.http.get(`${environment.firebase}tickets/${id}`);
  }
  add(form: Ticket) {
    return from(this.ticketsCollection.add(form));
  }
  delete(id) {
    return this.http.delete(`${environment.firebase}tickets/${id}`);
  }
  edit(form) {
    return this.http.put(`${environment.firebase}tickets/${form.id}`, form);
  }
}
