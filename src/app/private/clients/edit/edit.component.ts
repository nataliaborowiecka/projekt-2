import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from '../clients.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  id;
  form = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(),
    surname: new FormControl(),
    phone: new FormControl(),
  });

  constructor(
    private acRouter: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private clientService: ClientsService) {
    this.id = this.acRouter.snapshot.params.id;
  }

  ngOnInit(): void {
    this.clientService.getClient(this.id).subscribe(
      user => {
        console.log('Dane z be', user);
        this.form.patchValue(user);
      }
    )
  }

  save() {
    this.clientService.edit(this.form.value).subscribe(
      () => {
        this.snackBar.open('Zapisano klienta', '', {
          duration: 2000
        })
        this.router.navigate(['app/clients']);
      }
    )
  }

}
