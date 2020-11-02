import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery/dist/jquery.min.js';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  exit() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
