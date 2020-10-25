import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket-list',
  templateUrl: './basket-list.component.html',
  styleUrls: ['./basket-list.component.css']
})

export class BasketListComponent implements OnInit {

  cartItems = [
    {
      id: 1,
      image: "../../../assets/basket/orange_juice.jpg",
      name: "name",
      weight: "0.0g",
      price: 0,
      number: 0
    },
    {
      id: 2,
      image: "../../../assets/basket/orange_juice.jpg",
      name: "name",
      weight: "0.0g",
      price: 0,
      number: 0
    },
    {
      id: 3,
      image: "../../../assets/basket/orange_juice.jpg",
      name: "name",
      weight: "0.0g",
      price: 0,
      number: 0
    }
  ];

  totalPrice:number = 0;

  constructor() { }

  ngOnInit(): void {
  }
}
