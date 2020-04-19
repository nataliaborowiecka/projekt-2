import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { MatTableModule } from '@angular/material/table';

const Routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'add',
    component: AddComponent,
  },
  {
    path: 'edit/:id',
    component: EditComponent,
  },
];
@NgModule({
  declarations: [EditComponent, AddComponent, ListComponent],
  imports: [CommonModule, MatTableModule, RouterModule.forChild(Routes)],
})
export class TicketsModule {}
