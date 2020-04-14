import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor(private http: HttpClient) { }

  // Normlany
  // Login i haslo => Do Backendu
  // Backend > true / false

  getUserList() {
    return this.http.get(`${environment.backendUrl}users`);
  }
}

// GET: // liste wszystkich uzytkownikow
// GET: (id) // Zwroci tylko tego uzywtkownika
// POST/ doda uzytkownika
// PUT / zaktualizauje uzytkownika
// DELETE / usunie uzytkownika


// 1. Pobierzemy liste uzytkownikow
// 2. Pofiltrujemy tych uzytkownikow => uzytkonwikow.login === formularz.login
// => TAK: uztkownik.haslo === formularz.haslo
// => => TAK Zaloguj
// => => NIE wywal blad
