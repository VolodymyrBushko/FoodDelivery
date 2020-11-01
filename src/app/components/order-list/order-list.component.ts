import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../services/order.service';
import parseJwt from '../../utils/parseJwt';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orderList = [];

  constructor(
    private orderService: OrderService
  ) {
  }

  ngOnInit(): void {
    const {_id} = parseJwt(localStorage.getItem('token'));
    this.orderService.getOrderByUserId(_id)
      .subscribe(
        (data: []) => this.orderList = data,
        err => console.log(err.message || err)
      );
  }

}
