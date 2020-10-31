import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-controll-radio-group',
  templateUrl: './controll-radio-group.component.html',
  styleUrls: ['./controll-radio-group.component.css']
})
export class ControllRadioGroupComponent {

  @Output() onChanged = new EventEmitter<string>();

  buttons = [
    {id: 'items', label: 'Товари', imageUrl: '../../../assets/images/controll-radio-group/items.svg'},
    {id: 'categories', label: 'Категорії', imageUrl: '../../../assets/images/controll-radio-group/categories.svg'},
    {id: 'orders', label: 'Замовлення', imageUrl: '../../../assets/images/controll-radio-group/order.svg'},
    {id: 'users', label: 'Користувачі', imageUrl: '../../../assets/images/controll-radio-group/users.svg'}
  ]

  onClick(buttonId: string) {
    switch (buttonId) {
      case 'items':
        return this.onChanged.emit('items');
      case 'categories':
        return this.onChanged.emit('categories');
      case 'orders':
        return this.onChanged.emit('orders');
      case 'users':
        return this.onChanged.emit('users');
    }
  }

}
