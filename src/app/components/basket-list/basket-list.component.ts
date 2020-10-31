import {Component, OnInit, OnDestroy} from '@angular/core';
import {BehaviorSubject, Subscription} from 'rxjs';

@Component({
  selector: 'app-basket-list',
  templateUrl: './basket-list.component.html',
  styleUrls: ['./basket-list.component.css']
})

export class BasketListComponent implements OnInit, OnDestroy {

  totalPrice: number = 0;
  sub: Subscription = null;
  cart: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  ngOnInit(): void {
    this.cart.next(JSON.parse(localStorage.getItem('cart')) || []);
    this.sub = this.cart.subscribe(
      () => this.updateTotalPrice(),
      err => console.log(err.message || err)
    );
  }

  quantityOperation(itemId: string, increment: boolean): void {
    const index = this.cart.getValue().findIndex(({_id}) => _id === itemId);
    const item = this.cart.getValue().slice(index, index + 1)[0];

    if (+item['quantity'] <= 1 && !increment)
      return this.deleteItem(item._id);

    increment ? +item['quantity']++ : +item['quantity']--;
    this.cart.next([
      ...this.cart.getValue().slice(0, index),
      item,
      ...this.cart.getValue().slice(index + 1)
    ]);
  }

  deleteItem(itemId: string): void {
    this.cart.next(this.cart.getValue().filter(({_id}) => _id !== itemId));
  }

  updateTotalPrice(): void {
    this.totalPrice = this.cart.getValue()
      .reduce((accumulator, item) => accumulator + (item.price * item.quantity), 0);
  }

  ngOnDestroy(): void {
    const json = JSON.stringify(this.cart.getValue());
    localStorage.setItem('cart', json);
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
