import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  userList= [
    {
      id: 1,
      login: 'user1',
      email: 'user@gmail.com',
      password: '1234',
      phone: '+380 000 000 0000',
      imageUrl: '../../../assets/portfolio/no-avatar.svg',
      file: 'name file',
      isAdmin: false
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
