import { User } from './../../users/users.type';
import { ClientsService } from './../../clients/clients.service';
import { TicketStatus, Ticket } from './../ticket.type';

import { UsersService } from './../../users/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TicketsService } from './../tickets.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { getMultipleValuesInSingleSelectionError } from '@angular/cdk/collections';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  id;
  form = new FormGroup({
    id: new FormControl(null),
    user: new FormControl(null, [Validators.required]),
    client: new FormControl(null, [Validators.required]),
    title: new FormControl(null, [Validators.required]),
    status: new FormControl(),
  });
  ticket;
  TicketStatus = TicketStatus;
  users = [];
  clients = [];
  comments = [];

  constructor(
    private router: Router,
    private ticketsService: TicketsService,
    private snackBar: MatSnackBar,
    private acRouter: ActivatedRoute,
    private usersService: UsersService,
    private clientsService: ClientsService
  ) {
    this.id = this.acRouter.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getTicket();
    this.getUsers();
    this.getClients();
  }
  getTicket() {
    this.ticketsService.getTicket(this.id).subscribe((ticket: Ticket) => {
      this.form.patchValue(ticket);
      this.ticket = ticket;
      this.comments = ticket.comments;
    });
  }
  getUsers() {
    this.usersService
      .getUsers()
      .subscribe((listOfUsers: any) => (this.users = listOfUsers));
  }
  getClients() {
    this.clientsService
      .getClients()
      .subscribe((listOfClients: any) => (this.clients = listOfClients));
  }
  save() {
    const dataToSave = {
      ...this.form.value,
    };
    this.ticketsService.edit(dataToSave).subscribe(() => {
      this.snackBar.open('Zapisano zgłoszenie', '', {
        duration: 2000,
      });
      this.router.navigate(['app/tickets']);
    });
  }
}
