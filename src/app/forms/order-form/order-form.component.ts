import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  @Input() order = null;
  @Input() users = null;
  @Input() items = null;
  @Input() new = false;
  form: FormGroup = null;
  loader: boolean = false;
  @Output() onDelete = new EventEmitter<string>();

  constructor(
    private orderService: OrderService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      user: [this.order['user']['_id']],
      date: [this.order['date']],
      email: [this.order['email']],
      address: [this.order['address']],
      totalPrice: [this.order['totalPrice']],
      items: this.formBuilder.array([])
    });
    this.setItems();
  }

  setItems() {
    let control = <FormArray> this.form.controls.items;
    this.order.items.forEach(({item, quantity}) => {
      control.push(this.formBuilder.group({
        item: item._id,
        name: item.name,
        quantity: quantity
      }));
    });
  }

  addItem(controls: any) {
    let control = <FormArray> this.form.controls.items;
    control.push(
      this.formBuilder.group({
        item: null,
        name: null,
        quantity: 0
      })
    );
  }

  deleteItem(index) {
    let control = <FormArray> this.form.controls.items;
    control.removeAt(index);
  }

  async update() {
    try {
      this.loader = true;
      const _id = this.order._id;
      await this.orderService.updateOrder(this.form.value, _id).toPromise();
      console.log(`order with id ${_id} has been updated`);
    } catch (e) {
      console.log(e.message);
    }
    this.loader = false;
  }

  async delete() {
    try {
      const _id = this.order._id;
      await this.orderService.deleteOrder(_id).toPromise();
      this.onDelete.emit(_id);
      console.log(`order with id ${_id} has been deleted`);
    } catch (e) {
      console.log(e.message);
    }
  }

  async save() {
    try {
      await this.orderService.addOrder(this.form.value).toPromise();
      console.log('order has been added');
    } catch (e) {
      console.log(e.message);
    }
  }

}
