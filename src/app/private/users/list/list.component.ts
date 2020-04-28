import { User } from './../users.type';
import { Router } from '@angular/router';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { UsersModule } from '../users.module';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'surname', 'id', 'actions'];
  dataSource = [];
  constructor( private usersService: UsersService,
              private router: Router) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(
      (usersList: any) => {
        this.dataSource = usersList;
      }
    )

    }
    delete(id) {
      if(confirm('Czy chcesz usunąć użytkownika?')) {
        this.usersService.delete(id).subscribe(response => {
          this.usersService.getUsers().subscribe((usersList: any) => {
            this.dataSource = usersList;
            this.router.navigate(['/app/users'])
          })
        }

        )
      }
    }
  }


