import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/models/User';
import { RegisterService } from '../../services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  users: Array<User> = [];



  constructor(private registerService: RegisterService, private router: Router) {}

  registerForm = new FormGroup({
    username: new FormControl(''),
    firstname: new FormControl(''),
    password: new FormControl('')
  })



  register() {
    
  }

}
