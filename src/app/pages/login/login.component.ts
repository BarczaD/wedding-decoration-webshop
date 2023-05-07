import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

 loginForm = new FormGroup({
  email: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required)
 });

  constructor() {
    this.loginForm.valueChanges.subscribe((value) => {
      console.log(value);
    })
  }


  login() {
    if (this.loginForm.invalid) return;

    alert('mükszik');
  }
}
