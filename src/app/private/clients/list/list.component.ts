import { element } from 'protractor';
import { ClientsService } from './../clients.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'surname',
    'phone',
    'companyname',
    'nip',
    'city',
    'postalcode',
    'street',
    'buildingnumber',
    'apartment',
    'actions',
  ];
  dataSource = [];

  constructor(private clientsService: ClientsService, private router: Router) {}

  ngOnInit(): void {
    this.clientsService.getClients().subscribe((clientsList: any) => {
      this.dataSource = clientsList;
    });
  }
  delete(id) {
    if (confirm('Czy chcesz usunąć klienta?')) {
      this.clientsService.delete(id).subscribe((response) => {
        this.clientsService.getClients().subscribe((clientsList: any) => {
          this.dataSource = clientsList;
          this.router.navigate(['/app/clients']);
        });
      });
    }
  }
}
