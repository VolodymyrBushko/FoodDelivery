import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery/dist/jquery.min.js';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories = [
    {id: 1, label: 'drink', icon: 'drink.svg'},
    {id: 2, label: 'pizza', icon: 'pizza.svg'},
    {id: 3, label: 'sushi', icon: 'sushi.svg'},
    {id: 4, label: 'dessert', icon: 'dessert.svg'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
