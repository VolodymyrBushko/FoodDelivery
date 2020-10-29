import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  carts=[
      {path:"../../../assets/images/bigerHome.jpg", text:"some text about goods 11111"},
      {path:"../../../assets/images/pic2.jpg", text:"some text about goods 22222"},
      {path:"../../../assets/images/pic1.jpg", text:"some text about goods 333333"}]
  cartItems = [];
  totalPrice: number=0;
  constructor() { }

  ngOnInit(): void {
    this.cartItems=JSON.parse(localStorage.getItem('cart'));
  }

}
