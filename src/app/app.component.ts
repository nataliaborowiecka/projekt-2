import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'natalka';
  clients: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.clients = db.list('clients').valueChanges();
    const relative = db.object('client').valueChanges();
  }
}
