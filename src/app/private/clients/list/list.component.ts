import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'surname', 'phone'];
  dataSource = [];

  constructor(private clientsService: ClientsService) { }

  ngOnInit(): void {
    this.clientsService.getClients().subscribe(
      (clientsList: any) => {
        this.dataSource = clientsList;
      }
    );
  }

}
