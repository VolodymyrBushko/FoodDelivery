import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import validator from '../../validators/register.validator';
import {UserService} from '../../services/user.service';
import validators from '../../validators/register.validator';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() user = null;
  @Input() new = false;
  form: FormGroup = null;
  loader: boolean = false;
  @Output() onDelete = new EventEmitter<string>();

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    if (!this.new) {
      this.form = this.formBuilder.group({
        'login': [this.user['login'], validator.login],
        'phone': [this.user['phone'], validator.phone],
        'imageUrl': [this.user['imageUrl'], validator.imageUrl]
      });
    } else {
      this.form = this.formBuilder.group({
        'login': [null, validators.login],
        'phone': [null, validators.phone],
        'imageUrl': [null, validators.imageUrl],
        'email': [null, validators.email],
        'password': [null, validators.password],
        'confirm': [null, validators.confirm]
      });
    }
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

  async save() {
    try {
      this.form.disable();
      const {password, confirm} = this.form.value;
      if (password === confirm) {
        await this.authService.register(this.form.value).toPromise();
        console.log('user has been added');
      } else {
        this.form.enable();
        this.form.controls['confirm'].setErrors({'incorrect': true});
      }
    } catch (e) {
      this.form.enable();
      console.log(e.message);
    }
  }

}
