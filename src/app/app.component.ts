import {Component, OnInit} from '@angular/core';

import {AuthService} from './services/auth.service';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.setToken(token);
    }

    // ***** test ***** //

    // ***** test ***** //

  }

}
