import {Component, OnInit} from '@angular/core';
import {FeedbackService} from '../../services/feedback.service';
import parseJwt from '../../utils/parseJwt';
import alertify from 'alertifyjs';


@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {

  comentsUserTest: Array<object> = [];
  id: String = null;

  constructor(private feedbackService: FeedbackService) {
    const token = localStorage.getItem('token');
    if (token) {
      const {_id} = parseJwt(token);
      this.id = _id;
    }
  }

  ngOnInit(): void {
    this.getPosts();
    console.log(this.id);
  }

  getPosts() {
    this.feedbackService.getPosts().subscribe((data: Array<object>) => {
        this.comentsUserTest = data;
      }
    );
  }

  post: String;

  addPost() {
    const token = localStorage.getItem('token');
    if (token) {
      const {_id} = parseJwt(token);
      this.feedbackService.addPost(_id, this.post).subscribe((data: object) => {

          this.comentsUserTest.push(data);
          alertify.success('Додано');
          this.getPosts();
        }
      );
    } else {
      alertify.error('Вам необхідно увійти в профіль.');
    }
    this.post = '';
  }

  isDeleting: boolean = false;

  deletePost(_id) {
    this.isDeleting = true;
    console.log(_id);
    this.feedbackService.deletePost(_id).subscribe(
      () => {
        alertify.success('видаленнo');
        this.comentsUserTest = this.comentsUserTest.filter((item) => item['_id'] !== _id);

        this.isDeleting = false;
      });
  }

}
