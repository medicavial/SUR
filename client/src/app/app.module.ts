import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//rutas
import {APP_ROUTING} from './app.routes';

//servicios
import {ConsultasService} from './services/consultas.service';
import { AlertService } from './services/alert.service';
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    ConsultasService,
    AlertService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
