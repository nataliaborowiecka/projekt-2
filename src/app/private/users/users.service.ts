import { Observable, from } from 'rxjs';
import { User } from './users.type';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AngularFirestoreCollection,
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private usersCollection: AngularFirestoreCollection<User>;
  private userDoc: AngularFirestoreDocument<User>;
  users: Observable<User[]>;
  user: Observable<User>;
  constructor(private http: HttpClient, private afs: AngularFirestore) {
    this.usersCollection = this.afs.collection<User>('clients');
    this.users = this.usersCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as User;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  getUsers() {
    return this.users;
  }
  getUser(id: string) {
    this.userDoc = this.afs.doc<User>(`users/${id}`);
    this.user = this.userDoc.valueChanges();
    return this.user;
  }
  add(form: User) {
    return from(this.usersCollection.add(form));
  }
  edit(form) {
    return this.http.put(`${environment.firebase}users/${form.id}`, form);
  }
  delete(id) {
    return this.http.delete(`${environment.firebase}users/${id}`);
  }
}
