import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Order from '../interfaces/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private _baseUrl: string = 'http://localhost:5000/api/orders';

  constructor(private http: HttpClient) {
  }

  getOrders() {
    return this.http.get(this._baseUrl);
  }

  getOrderById(id: string) {
    return this.http.get(`${this._baseUrl}/${id}`);
  }

  getOrderByUserId(userId: string) {
    return this.http.get(`${this._baseUrl}/users/${userId}`);
  }

  addOrder(order: Order) {
    return this.http.post(`${this._baseUrl}/add`, order);
  }

  deleteOrder(id: string) {
    return this.http.delete(`${this._baseUrl}/${id}`);
  }

  updateOrder(order: Order, id: string) {
    return this.http.put(`${this._baseUrl}/${id}`, order);
  }

  sendOrderEmail(order: Order) {
    return this.http.post(`${this._baseUrl}/email/send`, order);
  }

}
