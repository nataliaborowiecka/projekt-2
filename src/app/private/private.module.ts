import { ListComponent } from './clients/list/list.component';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private/private.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'app',
    component: PrivateComponent,
    children: [
      {
        path: 'users',
        data: {
          breadcrumb: 'Użytkownicy',
        },
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
      },
      {
        path: 'clients',
        data: {
          breadcrumb: 'Klienci'
        },
        loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)
      },
      {
        path: 'tickets',
        data: {
          breadcrumb: 'Zgłoszenia'
        },
        loadChildren: () => import('./tickets/tickets.module').then(m => m.TicketsModule)
      },
      {
      path: 'dashboard',
      data: {
        breadcrumb: 'Strona główna'
      },
      loadChildren: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
      }
    ]
  }
];

@NgModule({
  declarations: [PrivateComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class PrivateModule { }
