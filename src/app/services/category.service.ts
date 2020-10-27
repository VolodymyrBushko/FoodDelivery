import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Category from '../interfaces/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private _baseUrl: string = 'http://localhost:5000/api/categories';

  constructor(private http: HttpClient) {
  }

  getCategories() {
    return this.http.get(this._baseUrl);
  }

  getCategoryById(id: string) {
    return this.http.get(`${this._baseUrl}/${id}`);
  }

  addCategory(category: Category) {
    return this.http.post(`${this._baseUrl}/add`, category);
  }

  updateCategory(category: Category, id: string) {
    return this.http.put(`${this._baseUrl}/update/${id}`, category);
  }

  deleteCategory(id: string) {
    return this.http.delete(`${this._baseUrl}/delete/${id}`);
  }

}
