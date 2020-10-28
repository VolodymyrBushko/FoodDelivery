import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controll-radio-group',
  templateUrl: './controll-radio-group.component.html',
  styleUrls: ['./controll-radio-group.component.css']
})
export class ControllRadioGroupComponent implements OnInit {
  imageUrl_1="../../../assets/images/controll-radio-group/items.svg";
  imageUrl_2="../../../assets/images/controll-radio-group/categories.svg";
  imageUrl_3="../../../assets/images/controll-radio-group/order.svg";
  imageUrl_4="../../../assets/images/controll-radio-group/users.svg";
  constructor() { }

  ngOnInit(): void {
  }
  itemsClick(){}
  componentsClick(){}
  ordersClick(){}
  usersClick(){}
}
