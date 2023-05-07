import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: []
})
export class HeaderComponent {

  isToggled:boolean = false;
  isLoggedIn:boolean = false;
  toggleMenu() : void {
    this.isToggled = !this.isToggled;
  }

  constructor(private authService: AuthService) { }
  
  public login() {
    this.isLoggedIn = true;
  }
  
  logout() {
    this.isLoggedIn = false;
    this.authService.logout();
  }
}
