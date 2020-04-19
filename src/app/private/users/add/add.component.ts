import { Router } from '@angular/router';
import { UsersService } from './../users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    surname: new FormControl(null, [Validators.required]),
    login: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    id: new FormControl(),
  });
  constructor(
    private userService: UsersService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}
  save() {
    this.userService.add(this.form.value).subscribe((response) => {
      this.snackBar.open('Dodano użytkownika', '', {
        duration: 2000,
      });
      this.router.navigate(['app/users']);
    });
  }
}
