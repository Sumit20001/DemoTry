import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisteremployeeComponent } from './registeremployee/registeremployee.component';
import { RestDataSource } from './model/restdatasource';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModelModule } from './model/model.module';
import { AdmindashbComponent } from './admindashb/admindashb.component';
import { HeaderComponent } from './header/header.component';
import { RegcandidateComponent } from './regcandidate/regcandidate.component';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    RegisteremployeeComponent,
    AdmindashbComponent,
    HeaderComponent,
    RegcandidateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ModelModule,

  ],
  providers: [RestDataSource],
  bootstrap: [AppComponent]
})
export class AppModule { }
