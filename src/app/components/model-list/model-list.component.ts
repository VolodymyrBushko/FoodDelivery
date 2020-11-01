import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import {UserService} from '../../services/user.service';
import {ItemService} from '../../services/item.service';
import {CategoryService} from '../../services/category.service';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.css']
})
export class ModelListComponent implements OnInit {

  @Input() set setChoice(choice) {
    this.choice.next(choice);
  }

  array = null;
  loader: boolean = false;
  choice: BehaviorSubject<string> = new BehaviorSubject<string>('items');
  shortCategories = null;

  constructor(
    private userService: UserService,
    private itemService: ItemService,
    private categoryService: CategoryService,
    private orderService: OrderService
  ) {
  }

  async ngOnInit() {
    this.choice.subscribe(choice => this.onChoice(choice));
    this.shortCategories = await this.getShortCategories();
  }

  async onChoice(choice) {
    this.loader = true;
    switch (choice) {
      case 'items':
        this.array = await this.itemService.getItems().toPromise();
        break;
      case 'categories':
        this.array = await this.categoryService.getCategories().toPromise();
        break;
      case 'orders':
        this.array = await this.orderService.getOrders().toPromise();
        break;
      case 'users':
        this.array = await this.userService.getUsers().toPromise();
        break;
    }
    this.loader = false;
  }

  onDelete(delId: string) {
    this.array = this.array.filter(({_id}) => _id !== delId);
  }

  async getShortCategories() {
    try {
      const categories = await this.categoryService.getCategories().toPromise() as [] || [];
      return categories.map(({_id, name}) => ({
        _id, name
      }));
    } catch (e) {
      console.log(e.message);
      return [];
    }
  }

}
