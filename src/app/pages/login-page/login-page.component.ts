import {Component, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

import {AuthService} from '../../services/auth.service';
import validators from '../../validators/login.validator';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnDestroy {

  form: FormGroup;
  sub: Subscription;

  constructor(
    private auth: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      'email': [null, validators.email],
      'password': [null, validators.password]
    });
  }

  onSubmit(): void {
    this.form.disable();
    this.sub = this.auth.login(this.form.value).subscribe(
      () => this.router.navigate(['/']),
      err => {
        this.form.enable();
        console.log(err || err.message);
      }
    )
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
