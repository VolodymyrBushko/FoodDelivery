import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orderList = [
    {
      id: 1,
      user: 'vasyl',
      date: '25.10.2020',
      email: 'vasyl@gmail.com',
      address: 'lviv',
      totalPrice: 1000,
      items: [
        {
          item: 'coca-cola',
          quantity: 3
        },
        {
          item: 'salat',
          quantity: 3
        },
        {
          item: 'pizza',
          quantity: 1
        }
      ]
    },
    {
      id: 2,
      user: 'bob',
      date: '26.10.2020',
      email: 'user@gmail.com',
      address: 'Kiev',
      totalPrice: 200,
      items: [
        {
          item: 'coca-cola',
          quantity: 1
        },
        {
          item: 'salat',
          quantity: 1
        },
        {
          item: 'pizza',
          quantity: 1
        }
      ]
    }
  ];

  


  constructor() { }

  ngOnInit(): void {
  }

}
