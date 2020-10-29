import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as $ from 'jquery/dist/jquery.min.js';
import {CategoryService} from '../../services/category.service';
import Category from '../../interfaces/Category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
  ) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories()
      .subscribe(
        (data: Category[]) => this.categories = data,
        err => console.log(err.message || err)
      );
  }

}
