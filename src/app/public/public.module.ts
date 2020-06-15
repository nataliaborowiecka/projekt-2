import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localePl from '@angular/common/locales/pl';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    HttpClientModule,
    NgxAuthFirebaseUIModule,
  ],
})
export class PublicModule {}
registerLocaleData(localePl);
