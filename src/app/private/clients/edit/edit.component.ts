import { ClientsService } from './../clients.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormControlName, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { getMatFormFieldPlaceholderConflictError } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  id;
  form = new FormGroup({
    id: new FormControl(null),
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
    private router: Router,
    private clientsservice: ClientsService,
    private acRouter: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.id = this.acRouter.snapshot.params.id;
  }

  ngOnInit(): void {
    this.clientsservice.getClient(this.id).subscribe((user) => {
      console.log('dane z be', user);
      this.form.patchValue(user);
    });
  }
  save() {
    this.clientsservice.edit(this.form.value).subscribe(() => {
      this.snackBar.open('Zapisano klienta', '', {
        duration: 2000,
      });
      this.router.navigate(['app/clients']);
    });
  }
}
