import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import validator from '../../validators/item.validator';
import {ItemService} from '../../services/item.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  @Input() item = null;
  @Input() categories = null;
  form: FormGroup = null;
  loader: boolean = false;
  @Output() onDelete = new EventEmitter<string>();

  constructor(
    private itemService: ItemService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [this.item['name'], validator.name],
      price: [this.item['price'], validator.price],
      category: [this.item['category']['_id']],
      weight: [this.item['weight'], validator.weight],
      imageUrl: [this.item['imageUrl'], validator.imageUrl],
      description: [this.item['description'], validator.description]
    });
  }

  async update() {
    try {
      this.loader = true;
      const _id = this.item._id;
      await this.itemService.updateItemById(this.form.value, _id).toPromise();
      console.log(`item with id ${_id} has been updated`);
    } catch (e) {
      console.log(e.message);
    }
    this.loader = false;
  }

  async delete() {
    try {
      const _id = this.item._id;
      await this.itemService.deleteItemById(_id).toPromise();
      this.onDelete.emit(_id);
      console.log(`item with id ${_id} has been deleted`);
    } catch (e) {
      console.log(e.message);
    }
  }

}
