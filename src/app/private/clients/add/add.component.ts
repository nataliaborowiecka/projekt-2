import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  // Zrobic formularz tak jak w logowaniu
  constructor() { }

  ngOnInit(): void {
  }

  // Funkcja save() => ktora zabierze wartosci z formularza

  // Polaczyc sie z serwisem, i przekazac wartosci
  // this.clientsServis.add(this.form.value).subs // poprawnie dodano // przeniesc na liste clientow
}
