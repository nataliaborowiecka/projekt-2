import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';

const Routes: Routes = [
  {
    path: '',
    component: ListComponent,
    data: {
      breadcrumb: ''
    }
  },
  {
    path: 'add',
    component: AddComponent,
    data: {
      breadcrumb: 'Dodaj klienta'
    }
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    data: {
      breadcrumb: ''
    }
  },
  {
    path: 'view',
    component: ViewComponent,
  },
];
@NgModule({
  declarations: [EditComponent, AddComponent, ViewComponent, ListComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    RouterModule.forChild(Routes),
  ],
})
export class ClientsModule {}
