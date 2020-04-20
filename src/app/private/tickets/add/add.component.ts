import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TicketsService } from './../tickets.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users/users.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  form = new FormGroup({
    user: new FormControl(null, [Validators.required]),
    client: new FormControl(null, [Validators.required]),
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(),
    status: new FormControl('NEW'),
  });
  users = [];

  constructor(
    private ticketsService: TicketsService,
    private usersService: UsersService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(
      (listOfUsers: any) => this.users = listOfUsers
    );
  }

  save() {
    this.ticketsService.add(this.form.value).subscribe((response) => {
      this.router.navigate(['/app/tickets']);
      this.snackBar.open('Dodano bilet', '', {
        duration: 2000,
      });
    });
  }
}
