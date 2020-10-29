import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-controll-radio-group',
  templateUrl: './controll-radio-group.component.html',
  styleUrls: ['./controll-radio-group.component.css']
})
export class ControllRadioGroupComponent {

  @Output() onChanged = new EventEmitter<string>();

  imageUrl_1 = "../../../assets/images/controll-radio-group/items.svg";
  imageUrl_2 = "../../../assets/images/controll-radio-group/categories.svg";
  imageUrl_3 = "../../../assets/images/controll-radio-group/order.svg";
  imageUrl_4 = "../../../assets/images/controll-radio-group/users.svg";

  itemsClick = () => this.onChanged.emit('items');
  categoriesClick = () => this.onChanged.emit('categories');
  ordersClick = () => this.onChanged.emit('orders');
  usersClick = () => this.onChanged.emit('users');

}
