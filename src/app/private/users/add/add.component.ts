import { Router } from '@angular/router';
import { UsersService } from './../users.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(),
    surname: new FormControl(),
    login: new FormControl(),
    password: new FormControl(),
    id: new FormControl(),
  });
  constructor(
    private userService: UsersService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}
  save() {
    console.log('dodano poprawnie');
    this.userService.add(this.form.value).subscribe((response) => {
      this.snackBar.open('Dodano użytkownika', '', {
        duration: 2000,
      });
      this.router.navigate(['app/users']);
    });
  }
}
