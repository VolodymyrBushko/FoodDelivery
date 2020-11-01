import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import validator from '../../validators/portfolio.validator';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() user = null;
  form: FormGroup = null;
  loader: boolean = false;
  @Output() onDelete = new EventEmitter<string>();

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      'login': [this.user['login'], validator.login],
      'phone': [this.user['phone'], validator.phone],
      'imageUrl': [this.user['imageUrl'], validator.imageUrl]
    });
  }

  async update() {
    try {
      this.loader = true;
      const _id = this.user._id;
      await this.userService.updateUserById(this.form.value, _id).toPromise();
      console.log(`user with id ${_id} has been updated`);
    } catch (e) {
      console.log(e.message);
    }
    this.loader = false;
  }

  async delete() {
    try {
      const _id = this.user._id;
      await this.userService.deleteUserById(_id).toPromise();
      this.onDelete.emit(_id);
      console.log(`user with id ${_id} has been deleted`);
    } catch (e) {
      console.log(e.message);
    }
  }

}
