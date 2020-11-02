import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import validator from '../../validators/login.validator';
import {UserService} from '../../services/user.service';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-search-orders',
  templateUrl: './search-orders.component.html',
  styleUrls: ['./search-orders.component.css']
})
export class SearchOrdersComponent implements OnInit {

  form: FormGroup = null;
  orders: [] = null;

  constructor(
    private userService: UserService,
    private orderService: OrderService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', validator.email]
    });
  }

  async onChange() {
    if (this.form.valid) {
      const email = this.form.controls.email.value;
      try {
        const _id = await this.userService.getUserIdByEmail(email).toPromise();
        this.orders = await this.orderService.getOrderByUserId(_id['_id']).toPromise() as [] || [];
      } catch (e) {
        console.log(e.message);
      }
    }
  }

}
