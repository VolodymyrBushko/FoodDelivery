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

  choice: BehaviorSubject<string> = new BehaviorSubject<string>('items');
  array = null;

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
    console.log(this.array);
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

  selector() {
    switch (this.choice.getValue()) {
      case 'items':
        return this.itemSelector(this.array);
      case 'categories':
        return this.categorySelector(this.array);
      case 'users':
        return this.userSelector(this.array);
      case 'orders':
        return this.orderSelector(this.array);
    }
  }

  orderSelector(orders: []) {
    return orders.map(order => ({
      _id: order['_id'],
      preview: `${order['user']['login']} <${order['email']}> (${order['date']})`,
      fields: {
        'email': order['email'],
        'address': order['address'],
        'totalPrice': order['totalPrice'],
        'items': (order['items'] as Array<object>).map(item => ({
          '_id': item['item']['_id'],
          'name': item['item']['name'],
          'quantity': item['quantity']
        }))
      }
    }));
  }

  userSelector(users: []) {
    return users.map(user => ({
      _id: user['_id'],
      preview: `${user['login']} <${user['email']}>`,
      fields: {
        'login': user['login'],
        'phone': user['phone'],
        'imageUrl': user['imageUrl']
      }
    }));
  }

  itemSelector(items: []) {
    return items.map(item => ({
      _id: item['_id'],
      preview: `${item['name']} (${item['category']['name']})`,
      fields: {
        'name': item['name'],
        'price': item['price'],
        'category': item['category']['name'],
        'description': item['description'],
        'weight': item['weight'],
        'imageUrl': item['imageUrl']
      }
    }));
  }

  categorySelector(categories: []) {
    return categories.map(category => ({
      _id: category['_id'],
      preview: category['name'],
      fields: {
        'name': category['name'],
        'imageUrl': category['imageUrl']
      }
    }));
  }

}
