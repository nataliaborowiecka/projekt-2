import { Client } from './../clients.type';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
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

  constructor(
    private clientsService: ClientsService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.clientsService.getClients().subscribe((clientsList: any) => {
      this.dataSource = clientsList;
    });
  }
  delete(id) {
    this.clientsService.delete(id).subscribe((response) =>
      this.getData());
  }
}
