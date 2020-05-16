import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  ActivatedRoute,
  Router
} from '@angular/router';

import { ClientsService } from '../../clients/clients.service';
import { Client } from '../../clients/clients.type';
import { UsersService } from '../../users/users.service';
import { User } from '../../users/users.type';
import {
  Ticket,
  TicketStatus
} from '../ticket.type';
import { TicketsService } from '../tickets.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  id: number;
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
  ticket: Ticket;
  TicketStatus = TicketStatus;
  users: User[] = [];
  clients: Client[] = [];
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
    this.dataSource = this.ticket.comments;
    this.dataSource.push(this.commentForm.value);
    this.save(false);
  }
}
