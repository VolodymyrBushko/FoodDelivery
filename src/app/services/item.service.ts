import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Item from '../interfaces/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private _baseUrl: string = 'http://localhost:5000/api/items';

  constructor(private http: HttpClient) {
  }

  getItems() {
    return this.http.get(this._baseUrl);
  }

  getItemById(id: string) {
    return this.http.get(`${this._baseUrl}/${id}`);
  }

  getItemByCategoryId(id: string) {
    return this.http.get(`${this._baseUrl}/categories/${id}`);
  }

  addItem(item: Item) {
    return this.http.post(`${this._baseUrl}/add`, item);
  }

  updateItemById(item: Item, id: string) {
    return this.http.put(`${this._baseUrl}/${id}`, item);
  }

  deleteItemById(id: string) {
    return this.http.delete(`${this._baseUrl}/${id}`);
  }

}
