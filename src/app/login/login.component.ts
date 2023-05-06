import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:string = "";
  password:string = "";

  constructor() {}

  ngOnInit() {

  }

  logInUser() {
    if(this.username == "Admin" && this.password == "Admin123") {
      console.log("admin");
    }
  }
}
