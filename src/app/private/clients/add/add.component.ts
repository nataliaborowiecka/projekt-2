import { ClientsService } from './../clients.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


// 1. Dodac zmiena isCompany = false
// 2. Funkcje o nazwie userSelectInput
// ktora bedzie: this.isCompany = !this.isCompany;

/// const ! nie wolno zmieniac wartosci 
/// zmiennna = wartosc

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    surname: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
    companyname: new FormControl(),
    nip: new FormControl(),
    city: new FormControl(),
    postalcode: new FormControl(),
    street: new FormControl(),
    buildingnumber: new FormControl(),
    apartment: new FormControl(),
  });

  constructor(
    private clientsService: ClientsService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}
  save() {
    this.clientsService.add(this.form.value).subscribe((response) => {
      this.router.navigate(['app/clients']);
      this.snackBar.open('Dodano klienta', '', {
        duration: 2000,
      });
    });
  }
}
