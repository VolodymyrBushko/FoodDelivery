import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  imageUrl="../../../assets/images/item-card/sushi/1.jpg";
  title="суші";
  price=123;
  constructor( ) {


  }

  ngOnInit(): void {
  }

}
