import { TicketStatus } from './../ticket.type';
import { ClientsService } from './../../clients/clients.service';
import { UsersService } from './../../users/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TicketsService } from './../tickets.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

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
    status: new FormControl(),
  });
  users = [];
  clients = [];
  TicketStatus = TicketStatus;

  constructor(
    private ticketsService: TicketsService,
    private router: Router,
    private snackBar: MatSnackBar,
    private usersService: UsersService,
    private clientsService: ClientsService
  ) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(
      (listOfUsers: any) => this.users = listOfUsers
    );
    this.clientsService.getClients().subscribe(
      (listOfClients: any) => this.clients = listOfClients
    )
  }
  save() {
    this.ticketsService.add(this.form.value).subscribe((response) => {
      this.router.navigate(['/app/tickets']);
      this.snackBar.open('Dodano zgłoszenie', '', {
        duration: 2000,
      });
    });
  }
}
