import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private _baseUrl: string = 'http://localhost:5000/api/feedback';

  constructor(private http: HttpClient) {
  }
  getPosts(): Observable<object> {
    return this.http.get(this._baseUrl);
  }
  addPost(_id, post): Observable<object> {
    return this.http.post(`${this._baseUrl}/add`, {_id, post});
  }
  deletePost(_id: string) {
    return this.http.delete(`${this._baseUrl}/delete/${_id}`);
  }
}
