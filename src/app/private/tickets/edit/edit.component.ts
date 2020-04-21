import { MatSnackBar } from '@angular/material/snack-bar';
import { TicketsService } from './../tickets.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

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
    description: new FormControl(),
  });
  ticket;
  constructor(
    private router: Router,
    private ticketsService: TicketsService,
    private snackBar: MatSnackBar,
    private acRouter: ActivatedRoute
  ) {
    this.id = this.acRouter.snapshot.params.id;
  }

  ngOnInit(): void {
    this.ticketsService.getTicket(this.id).subscribe((ticket) => {
      this.form.patchValue(ticket);
      this.ticket = ticket;
    });
  }
  save() {
    const dataToSave = {
      ...this.form.value,
      user: this.ticket.user,
      client: this.ticket.client,
    };
    this.ticketsService.edit(dataToSave).subscribe(() => {
      this.snackBar.open('Zapisano zgłoszenie', '', {
        duration: 2000,
      });
      this.router.navigate(['app/tickets']);
    });
  }
}
