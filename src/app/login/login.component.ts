import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RestDataSource } from '../model/restdatasource';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  visible:boolean = true;
  changetype:boolean = true;

  viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  public username?: string;
  public password?: string;
  public token?: string;
  public errorMessage?: string;

  

  constructor(private router: Router, private dataSource: RestDataSource) { }

  authenticate(form: NgForm) {
   
   
    if(form.valid) {
     
    console.log(this.username, this.password);
      
      
      
      this.dataSource.authenticate(this.username ?? "", this.password ?? "")
        .subscribe(response => {       
          console.log(response);   
          this.token = response.jwtToken;
          
          if(this.token != null && response.role =='Admin'){
            sessionStorage.setItem("token", this.token);
            this.router.navigateByUrl("/admindash");
            console.log(response.role);
            console.log(response.userName);
          }
          else if(this.token != null && response.role =='HR'){
            sessionStorage.setItem("token", this.token);
            this.router.navigateByUrl("/");
            console.log(response.role);
          }
          else if(this.token != null && response.role =='Tech'){
            sessionStorage.setItem("token", this.token);
            this.router.navigateByUrl("/registeremployee");
            console.log(response.role);
          }
          else {
            this.errorMessage = "Unauthorized Access!!";
            console.log(response.jwtToken.role)
          }
        })
    }
    else {
      this.errorMessage = "Form Data Invalid";
    }

    //  Response.role =='admin'




  }

}
