import {Component, Input, OnInit} from '@angular/core';

import {UserService} from '../../services/user.service';
import {ItemService} from '../../services/item.service';
import {CategoryService} from '../../services/category.service';
import {OrderService} from '../../services/order.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.css']
})
export class ModelListComponent implements OnInit {

  @Input() set setChoice(choice) {
    this.choice.next(choice);
  }

  choice: BehaviorSubject<string> = new BehaviorSubject<string>('items');
  array;

  constructor(
    private userService: UserService,
    private itemService: ItemService,
    private categoryService: CategoryService,
    private orderService: OrderService
  ) {
  }

  ngOnInit(): void {
    this.choice.subscribe(
      choice => {
        this.onChoice(choice);
      }
    );
  }

  async onChoice(choice) {
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
  }

  onUpdate(obj) {
    switch (this.choice.getValue()) {
      case 'items': /**/
        break;
      case 'categories': /**/
        break;
      case 'orders': /**/
        break;
      case 'users': /**/
        break;
    }
  }

  onDelete(id) {
    switch (this.choice.getValue()) {
      case 'items': /**/
        break;
      case 'categories': /**/
        break;
      case 'orders': /**/
        break;
      case 'users': /**/
        break;
    }
  }
}
