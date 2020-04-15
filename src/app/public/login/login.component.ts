import { PublicService } from './../public.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    login: new FormControl(),
    password: new FormControl(),
  });

  constructor(private publicService: PublicService,
              private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    console.log('działa', this.form.value.login);
    this.publicService.getUserlist().subscribe(
      (listOfUsersFromBackend: any) => {
        const findUser =listOfUsersFromBackend.find(user => user.login === this.form.value.login);
        if (findUser) {
          if (findUser.password === this.form.value.password) {
            this.router.navigateByUrl('/app/users');
          } else {
            alert('Twoje hasło jest złe!');
          }
        } else {
          alert('Nie znaleziono użytkownika');
        }
      }
    )
  }
}
