import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { ClientsComponent } from './clients/clients.component';



@NgModule({
  declarations: [UsersComponent, ClientsComponent],
  imports: [
    CommonModule
  ]
})
export class ReportsModule { }
