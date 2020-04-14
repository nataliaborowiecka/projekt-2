import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PrivateComponent } from './private/private.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
      },
      {
        path: 'clients',
        loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)
      }
    ]
  }
];

@NgModule({
  declarations: [PrivateComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class PrivateModule { }
