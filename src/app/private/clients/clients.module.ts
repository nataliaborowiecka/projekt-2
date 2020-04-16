import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { MatTableModule } from '@angular/material/table';

const Routes: Routes = [
  {
   path: '',
   component: ListComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'edit',
    component: EditComponent
  },
  {
    path: 'view',
    component: ViewComponent
  }
]
@NgModule({
  declarations: [EditComponent, AddComponent, ViewComponent, ListComponent],
  imports: [CommonModule,
    RouterModule.forChild(Routes),
    MatTableModule]
})
export class ClientsModule {}
