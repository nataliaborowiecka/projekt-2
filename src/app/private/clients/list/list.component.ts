import { ClientsService } from './../clients.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'surname', 'phone', 'action'];
  dataSource = [];

  constructor(private clientsService: ClientsService) {}

  ngOnInit(): void {
    this.clientsService.getClients().subscribe(
      (clientsList: any) => {
        this.dataSource = clientsList;
      }
    );
  }

  // Delete(id)
  //  if // confirm() 
  // True: polaczyl bym sie z BE => detelte(id) // komunikat ze sie udalo //  pobrac liste na nowo
  // False: // TO nic..
}
