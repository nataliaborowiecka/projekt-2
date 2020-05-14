import { MatDialogModule } from '@angular/material/dialog';
import { Add_commentComponent } from './add_comment/add_comment.component';
import { TicketsService } from './tickets.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

const Routes: Routes = [
  {
    path: '',
    component: ListComponent,
    data: {
      breadcrumb: 'Zgłoszenia',
    },
  },
  {
    path: 'add',
    component: AddComponent,
    data: {
      breadcrumb: 'Dodaj zgłoszenie',
    },
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    data: {
      breadcrumb: 'Edycja zgłoszenia',
    },
  },
];
@NgModule({
  declarations: [
    EditComponent,
    AddComponent,
    ListComponent,
    Add_commentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatChipsModule,
    MatSelectModule,
    MatDialogModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(Routes),
  ],
})
export class TicketsModule {}
