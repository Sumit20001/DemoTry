import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashbComponent } from './admindashb/admindashb.component';
import { LoginComponent } from './login/login.component';
import { RestDataSource } from './model/restdatasource';
import { RegcandidateComponent } from './regcandidate/regcandidate.component';
import { RegisteremployeeComponent } from './registeremployee/registeremployee.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: "", component: WelcomeComponent },
  { path:"login",component:LoginComponent },
  { path:"registeremployee",component:RegisteremployeeComponent},
  { path: "admindash", component:AdmindashbComponent },
  { path: "regcandidate", component:RegcandidateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
