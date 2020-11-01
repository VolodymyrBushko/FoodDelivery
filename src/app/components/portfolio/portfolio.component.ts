import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

import validator from '../../validators/portfolio.validator';
import parseJwt from '../../utils/parseJwt';
import {UserService} from '../../services/user.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  form: FormGroup;
  userId: string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {
    const token = parseJwt(localStorage.getItem('token'));
    this.userId = token._id;
  }

  async ngOnInit() {
    const user = await this.userService.getUserById(this.userId).toPromise();
    this.form = this.formBuilder.group({
      'login': [user['login'], validator.login],
      'phone': [user['phone'], validator.phone],
      'imageUrl': [user['imageUrl'], validator.imageUrl]
    });
  }

  async onUpdate() {
    if (this.form.valid) {
      await this.userService.updateUserById(this.form.value, this.userId).toPromise();
      this.authService.logout();
      await this.router.navigate(['/']);
    } else {
      console.log('invalid form');
    }
  }

}
