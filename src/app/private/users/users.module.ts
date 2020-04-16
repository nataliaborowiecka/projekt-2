import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


const routes: Routes = [
 {
   path: '',
   component: ListComponent
 },
 {
   path: 'edit',
   component: EditComponent
 },
 {
   path: 'view',
   component: ViewComponent
 },
 {
   path: 'add',
   component: AddComponent
 }
]
@NgModule({
  declarations: [AddComponent, EditComponent, ListComponent, ViewComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    MatTableModule
  ]
})
export class UsersModule { }
