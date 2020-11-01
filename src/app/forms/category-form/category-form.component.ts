import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import validator from '../../validators/category.validator';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  @Input() category = null;
  form: FormGroup = null;
  loader: boolean = false;
  @Output() onDelete = new EventEmitter<string>();

  constructor(
    private categoryService: CategoryService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [this.category['name'], validator.name],
      imageUrl: [this.category['imageUrl'], validator.imageUrl]
    });
  }

  async update() {
    try {
      this.loader = true;
      const _id = this.category._id;
      await this.categoryService.updateCategory(this.form.value, _id).toPromise();
      console.log(`category with id ${_id} has been updated`);
    } catch (e) {
      console.log(e.message);
    }
    this.loader = false;
  }

  async delete() {
    try {
      const _id = this.category._id;
      await this.categoryService.deleteCategory(_id).toPromise();
      this.onDelete.emit(_id);
      console.log(`category with id ${_id} has been deleted`);
    } catch (e) {
      console.log(e.message);
    }
  }

}
