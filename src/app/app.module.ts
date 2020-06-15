import { PublicModule } from './public/public.module';
import { PrivateModule } from './private/private.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    PrivateModule,
    PublicModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgxAuthFirebaseUIModule.forRoot(environment.firebase),
    MatPasswordStrengthModule,
  ],
  providers: [AngularFireAuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
