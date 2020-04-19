import { TicketsService } from './../tickets.service';
import { TicketsModule } from './../tickets.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['user', 'client', 'title', 'description'];
  dataSource = [];
  constructor(private ticketsService: TicketsService) {}

  ngOnInit(): void {
    this.ticketsService.getTickets().subscribe((ticketsList: any) => {
      this.dataSource = ticketsList;
    });

}
}
