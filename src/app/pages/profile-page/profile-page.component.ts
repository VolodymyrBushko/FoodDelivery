import {Component, OnInit} from '@angular/core';
import parseJwt from '../../utils/parseJwt';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  token;
  choice: string = 'items';

  constructor() {
    this.token = parseJwt(localStorage.getItem('token'));
  }

  ngOnInit(): void {
  }

  onChange(choice) {
    this.choice = choice;
  }

}
