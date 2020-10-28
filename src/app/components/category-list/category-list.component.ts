import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery/dist/jquery.min.js';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories = [
    {id: 1, label: 'напитки', icon: 'drink.svg'},
    {id: 2, label: 'піца', icon: 'pizza.svg'},
    {id: 3, label: 'суші', icon: 'sushi.svg'},
    {id: 4, label: 'десерти', icon: 'dessert.svg'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
