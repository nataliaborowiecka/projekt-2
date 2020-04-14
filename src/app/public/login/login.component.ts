import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PublicService } from '../public.service';
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
    console.log('Udalo sie', this.form.value.login);
    this.publicService.getUserList().subscribe(
      (listOfUsersFromBackend: any) => {
        const findUser = listOfUsersFromBackend.find(user => user.login === this.form.value.login);
        if (findUser) {
          // Uzytkownik z tym loginem istnieje
          if (findUser.password === this.form.value.password) {
            // this.router.navigate(['/app/users']);
            // To samo co linijka wyzej
            this.router.navigateByUrl('/app/users');
          } else {
            alert('Twoje haslo jest zle!');
          }
        } else {
          alert('Nie znaleziono takiego uzytkownika');
        }
      }
    )

  }

}
