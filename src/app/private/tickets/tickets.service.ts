import { Observable, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AngularFirestoreCollection,
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Ticket } from './ticket.type';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  private ticketsCollection: AngularFirestoreCollection<Ticket>;
  private ticketDoc: AngularFirestoreDocument<Ticket>;
  tickets: Observable<Ticket[]>;
  ticket: Observable<Ticket>;
  constructor(private http: HttpClient, private afs: AngularFirestore) {
    this.ticketsCollection = this.afs.collection<Ticket>('tickets');
    this.tickets = this.ticketsCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Ticket;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }
  getTickets() {
    return this.tickets;
  }
  getTicket(id: string) {
    this.ticketDoc = this.afs.doc<Ticket>(`tickets/${id}`);
    this.ticket = this.ticketDoc.valueChanges();
    return this.ticket;
  }
  add(form: Ticket) {
    return from(this.ticketsCollection.add(form));
  }
  delete(id) {
    this.ticketDoc = this.afs.doc<Ticket>(`tickets/${id}`);
    this.ticket = this.ticketDoc.valueChanges();
    return from(this.ticketDoc.delete());
  }
  edit(form) {
    return from(this.ticketDoc.update(form));
  }
}
