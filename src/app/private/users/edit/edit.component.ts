import { UsersService } from './../users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientsService } from './../../clients/clients.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    login: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });
  constructor(
    private usersservice: UsersService,
    private snackBar: MatSnackBar,
    private acRouter: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.acRouter.snapshot.params.id;
  }

  ngOnInit(): void {
    this.usersservice
      .getUser(this.id)
      .subscribe((user) => this.form.patchValue(user));
  }
  save() {
    this.usersservice.edit(this.form.value).subscribe(() => {
      this.snackBar.open('Zapisano użytkownika', '', {
        duration: 2000,
      });
      this.router.navigate(['app/users']);
    });
  }
}
