import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket-list',
  templateUrl: './basket-list.component.html',
  styleUrls: ['./basket-list.component.css']
})

export class BasketListComponent implements OnInit {

  constructor() { }

  cartItems = [
    {
      id: 1,
      image: "../../../assets/basket/orange_juice.jpg",
      name: "name",
      weight: "0.0g",
      price: 50,
      number: 0
    },
    {
      id: 2,
      image: "../../../assets/basket/orange_juice.jpg",
      name: "name",
      weight: "0.0g",
      price: 100,
      number: 0
    },
    {
      id: 3,
      image: "../../../assets/basket/orange_juice.jpg",
      name: "name",
      weight: "0.0g",
      price: 150,
      number: 0
    }
  ];

  totalPrice: number=0;
  newArray=[];



  ngOnInit(): void {

    localStorage.setItem('cart', JSON.stringify(this.cartItems));

    this.sumTotalPrice();
  }


  sumTotalPrice() {

    this.newArray =  JSON.parse( localStorage.getItem('cart'));

    this.newArray.forEach(element => {
      this.totalPrice  += element['price'];
    });

    console.log('TOTAL', this.totalPrice);
    console.log( "ID ", JSON.parse( localStorage.getItem('id')));
  }

  id: Number = 0;

  addItem(){

    this.newArray =  JSON.parse( localStorage.getItem('cart'));
    this.newArray.forEach(element => {
      this.id += element['id'];
    });

    console.log('ID', this.id);
  }

}



