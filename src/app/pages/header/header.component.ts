import { Component } from '@angular/core';

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
}
