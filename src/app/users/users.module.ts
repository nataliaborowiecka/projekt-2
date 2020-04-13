import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { componentFactoryName } from '@angular/compiler';


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
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }
