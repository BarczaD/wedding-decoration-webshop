import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lovebirds';
  loggedInUser?: firebase.default.User | null;

  ngOnInit(): void {
      this.authService.isUserLoggedIn().subscribe(user => {
        this.loggedInUser = user;
      }), error => {
        console.error(error);
      }
  }

  constructor(private authService: AuthService) { }

  isToggled:boolean = false;
  toggleMenu() : void {
    this.isToggled = !this.isToggled;
  }
  
  logout() {
    this.authService.logout().then(() => {
      console.log('Logged out');
    }).catch(error => {
      console.error(error);
    })
  }


}
