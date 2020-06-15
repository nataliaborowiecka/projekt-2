import { Client } from './clients.type';
import { Observable, from } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {
  AngularFirestoreCollection,
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private clientsCollection: AngularFirestoreCollection<Client>;
  private clientDoc: AngularFirestoreDocument<Client>;
  clients: Observable<Client[]>;
  client: Observable<Client>;
  constructor(private afs: AngularFirestore) {
    this.clientsCollection = this.afs.collection<Client>('clients');
    this.clients = this.clientsCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Client;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  getClients() {
    return this.clients;
  }
  getClient(id: string) {
    this.clientDoc = this.afs.doc<Client>(`clients/${id}`);
    this.client = this.clientDoc.valueChanges();
    return this.client;
  }

  add(form: Client) {
    return from(this.clientsCollection.add(form));
  }
  delete(id: string) {
    this.clientDoc = this.afs.doc<Client>(`clients/${id}`);
    return from(this.clientDoc.delete());
  }
  edit(form) {
    return from(this.clientDoc.update(form));
  }
}
