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
    description: new FormControl(null),
    client: new FormControl(null, [Validators.required]),
    title: new FormControl(null, [Validators.required]),
    status: new FormControl(),
  });
  commentForm = new FormGroup({
    date: new FormControl(),
    commentuser: new FormControl(),
    description: new FormControl(),
  });
  ticket;
  TicketStatus = TicketStatus;
  users = [];
  clients = [];
  comments = [];
  addcomment = false;
  dataSource = [];
  displayedColumns: string[] = ['date', 'commentuser', 'description'];
  maxDate: Date;

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  constructor(
    private router: Router,
    private ticketsService: TicketsService,
    private snackBar: MatSnackBar,
    private acRouter: ActivatedRoute,
    private usersService: UsersService,
    private clientsService: ClientsService
  ) {
    this.id = this.acRouter.snapshot.params.id;
    this.maxDate = new Date();
  }

  ngOnInit(): void {
    this.getTicket();
    this.getUsers();
    this.getClients();
  }

  addComments() {
    this.addcomment = true;
    
    const loggedUserId = +localStorage.getItem('userId');
    this.commentForm.patchValue({
      commentuser: this.users.find((user) => user.id === loggedUserId),
    });
  }

  getTicket() {
    this.ticketsService.getTicket(this.id).subscribe((ticket: Ticket) => {
      this.form.patchValue(ticket);
      this.ticket = ticket;
      if (ticket.comments) {
        this.comments = ticket.comments;
      }
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

  save(goToList = true) {
    const dataToSave = {
      ...this.form.value,
      comments: this.comments,
    };
    this.ticketsService.edit(dataToSave).subscribe(() => {
      this.snackBar.open('Zapisano zgłoszenie', '', {
        duration: 2000,
      });
      this.commentForm.reset();
      this.addcomment = false;

      if (goToList) {
        this.router.navigate(['app/tickets']);
      }
    });
  }

  savecomment() {
    this.comments.push(this.commentForm.value);
    this.save(false);
  }
}
