import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { UsersModule } from '../users.module';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'surname', 'id'];
  dataSource = [];
  constructor( private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(
      (usersList: any) => {
        this.dataSource = usersList;
      }
    )

    }
  }


