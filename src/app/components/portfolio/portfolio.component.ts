import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import validator from '../../validators/portfolio.validator';
import parseJwt from '../../utils/parseJwt';
import {UserService} from '../../services/user.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  form: FormGroup;
  token;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {
    this.token = parseJwt(localStorage.getItem('token'));
  }

  async ngOnInit() {

    const {_id} = this.token;
    const user = await this.userService.getUserById(_id).toPromise();

    this.form = this.formBuilder.group({
      'login': [user['login'], validator.login],
      'email': [user['email'], validator.email],
      'phone': [user['phone'], validator.phone],
      'imageUrl': [user['imageUrl'], validator.imageUrl]
    });
  }

  async onUpdate() {
    if (this.form.valid) {
      const {_id} = this.token;
      await this.userService.updateUserById(this.form.value, _id).toPromise();
      this.authService.logout();
      await this.router.navigate(['/']);
    }
  }

}
