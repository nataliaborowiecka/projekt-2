import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'natalka';
  clients: Observable<any[]>;
  constructor(db: AngularFireDatabase,
              firestore: AngularFirestore) {
    this.clients = db.list('clients').valueChanges();
    const relative = db.object('client').valueChanges();
    // this.items = firestore.collection('items').valueChanges();
  }
}
