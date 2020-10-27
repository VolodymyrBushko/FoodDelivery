import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import User from '../interfaces/User';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token: string = null;
  private _baseUrl: string = 'http://localhost:5000/api/users';

  constructor(private http: HttpClient) {
  }

  register(user: User) {
    return this.http.post(`${this._baseUrl}/register`, user);
  }

  login(user) {
    return this.http.post(`${this._baseUrl}/login`, user)
      .pipe(
        tap(
          (obj) => {
            localStorage.setItem('token', obj['token']);
            this.setToken(obj['token']);
          }
        )
      );
  }

  setToken(token: string): void {
    this._token = token;
  }

  getToken(): string {
    return this._token;
  }

  logout(): void {
    localStorage.clear();
    this._token = null;
  }

}
