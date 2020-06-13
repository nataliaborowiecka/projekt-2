import { PublicService } from './../public.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthProvider } from 'ngx-auth-firebaseui';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  printUser(event) {
    console.log(event);
  }

  printError(event) {
    console.error(event);
  }
  providers = AuthProvider;
  form = new FormGroup({
    login: new FormControl(),
    password: new FormControl(),
  });

  constructor(
    private publicService: PublicService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}
  login() {
    this.publicService
      .getUserlist()
      .subscribe((listOfUsersFromBackend: any) => {
        const findUser = listOfUsersFromBackend.find(
          (user) => user.login === this.form.value.login
        );
        if (findUser) {
          if (findUser.password === this.form.value.password) {
            localStorage.setItem('userId', findUser.id);
            this.router.navigateByUrl('/app/users');
          } else {
            this.snackBar.open('Hasło niepoprawne', 'OK', {
              duration: 2000,
            });
          }
        } else {
          this.snackBar.open('Nie znaleziono użytkownika', 'OK', {
            duration: 2000,
          });
        }
      });
  }
}
