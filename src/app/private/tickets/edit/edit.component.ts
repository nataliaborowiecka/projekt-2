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
  }

  ngOnInit(): void {
    this.getTicket();
    this.getUsers();
    this.getClients();
  }

  addComments() {
    this.addcomment = true;
    const loggedUserId = +localStorage.getItem('userId');
    this.commentForm.patchValue({commentuser: this.users.find(user => user.id === loggedUserId)});
    ;
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
      comments: this.comments
    };
    this.ticketsService.edit(dataToSave).subscribe(() => {
      this.snackBar.open('Zapisano zgłoszenie', '', {
        duration: 2000,
      });
      if (goToList) {
        this.router.navigate(['app/tickets']);
      }
    });
  }

  saveComment() {
    this.comments.push(this.commentForm.value);
    this.save(false);
  }
  // Problem 1: => Data dziwnie sie pokazuje
  // Pipe | data => w odpowiedniej formie np DD-MM-YYYY || dd/mm/yyyy

  // Problem 2 => schowac formularz po dodaniu
  // Problem 3 => aby sie czyscil

  // Problem 4 => Edycja
  // Problem 5 => Usuwanie

  // Problem 6 => data moge wybrac pozniejsza (material-angular dokumentacja)
  // Problem 7 => uzytkownika
}
