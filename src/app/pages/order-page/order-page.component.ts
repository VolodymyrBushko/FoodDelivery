import {Component, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

import validators from '../../validators/order.validator';
import {OrderService} from '../../services/order.service';
import parseJwt from '../../utils/parseJwt';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnDestroy {

  form: FormGroup;
  sub: Subscription;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      'address': [null, validators.address],
      'phone': [null, validators.phone],
      'email': [null, validators.email]
    });
  }

  async onSubmit() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const token = localStorage.getItem('token');
    if (!cart) {
      return console.log('cart is empty');
    }
    this.form.disable();
    const order = this.form.value;
    order.totalPrice = cart.reduce((accumulator, item) => accumulator + (item.price * item.quantity), 0);
    order.items = [];
    order.date = new Date();
    if (token) {
      const {_id} = parseJwt(token);
      order.user = _id;
    }
    cart.forEach(({_id: item, quantity}) => order.items.push({item, quantity}));
    try {
      await this.orderService.addOrder(order).toPromise();
      await this.orderService.sendOrderEmail(order).toPromise();
      console.log('order has been added');
      await this.router.navigate(['/']);
      localStorage.setItem('cart', null);
    } catch (e) {
      console.log(e.message);
      this.form.enable();
    }
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
