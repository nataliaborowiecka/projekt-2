import { DeleteComponent } from './../../shared/delete.component';
import { TicketStatus } from './../ticket.type';
import { Router } from '@angular/router';
import { ClientsService } from './../../clients/clients.service';
import { TicketsService } from './../tickets.service';
import { TicketsModule } from './../tickets.module';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['user', 'client', 'title', 'status', 'actions'];
  dataSource = [];
  TicketStatus = TicketStatus;
  constructor(
    private ticketsService: TicketsService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.ticketsService.getTickets().subscribe((ticketsList: any) => {
      this.dataSource = ticketsList;
    });
  }
  delete(id) {
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '250px',
      data: { isConfirm: true },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.ticketsService.delete(id).subscribe((response) => this.getData());
      }
    });
  }

  selectColor(color) {
    switch (color) {
      case 'IN_PROGRESS':
        return 'primary';
      case 'NEW':
        return 'accent';
      case 'CLOSED':
        return 'warn';
    }
  }
}
