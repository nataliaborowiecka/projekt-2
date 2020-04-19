import { Router } from '@angular/router';
import { ClientsService } from './../../clients/clients.service';
import { TicketsService } from './../tickets.service';
import { TicketsModule } from './../tickets.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = [
    'user',
    'client',
    'title',
    'description',
    'actions',
  ];
  dataSource = [];
  constructor(private ticketsService: TicketsService, private router: Router) {}

  ngOnInit(): void {
    this.ticketsService.getTickets().subscribe((ticketsList: any) => {
      this.dataSource = ticketsList;
    });
  }
  delete(id) {
    if (confirm('Czy chcesz usunąć bilet?')) {
      this.ticketsService.delete(id).subscribe((response) => {
        this.ticketsService.getTickets().subscribe((ticketslist: any) => {
          this.dataSource = ticketslist;
          this.router.navigate(['/app/tickets']);
        });
      });
    }
  }
}
