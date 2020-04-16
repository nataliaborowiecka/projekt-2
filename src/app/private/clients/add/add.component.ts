import { ClientsService } from './../clients.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(),
    surname: new FormControl(),
    phone: new FormControl(),
  });

  constructor(private clientsService: ClientsService,
              private router: Router) {}

  ngOnInit(): void {}
  save() {
    console.log('dodano', this.form.value.name);

  }

}
