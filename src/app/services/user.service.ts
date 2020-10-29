import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import User from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _baseUrl: string = 'http://localhost:5000/api/users';

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get(this._baseUrl);
  }

  getUserById(id: string) {
    return this.http.get(`${this._baseUrl}/${id}`);
  }

  updateUserById(user, id: string) {
    return this.http.put(`${this._baseUrl}/update/${id}`, user);
  }

  deleteUserById(id: string) {
    return this.http.delete(`${this._baseUrl}/delete/${id}`);
  }

}
