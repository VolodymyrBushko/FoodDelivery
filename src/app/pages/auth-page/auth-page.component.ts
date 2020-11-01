import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import validators from '../../validators/register.validator';
import alertify from 'alertifyjs';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit, OnDestroy {
  form: FormGroup;
  sub: Subscription;
  isLogin: boolean = true;

  constructor(
    private auth: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      'email': [null, validators.email],
      'password': [null, validators.password]
    });
  }

  isChecked(isLogin): void {
    if (isLogin) {
      this.form = this.formBuilder.group({
        'email': [null, validators.email],
        'password': [null, validators.password]
      });
    } else {
      this.form = this.formBuilder.group({
        'login': [null, validators.login],
        'email': [null, validators.email],
        'phone': [null, validators.phone],
        'imageUrl': [null, validators.imageUrl],
        'password': [null, validators.password],
        'confirm': [null, validators.confirm]
      });
    }
    this.isLogin = isLogin;
  }

  login(): void {
    this.sub = this.auth.login(this.form.value).subscribe(
      () => {
        alertify.success('Логін Ок !!!');
        this.router.navigate(['/']);
      },
      err => {
        alertify.error(err.message || err);
      },
    );
  }

  register(): void {
    const {password, confirm} = this.form.value;
    if (password === confirm) {
      this.form.disable();
      this.sub = this.auth.register(this.form.value).subscribe(
        () => {
          alertify.success('Реєстрація Ок !!!');
          this.router.navigate(['/auth']);
        }
        ,
        err => {
          this.form.enable();
          alertify.error(err.message || err);
        });
    } else {
      this.form.controls['confirm'].setErrors({'incorrect': true});
    }
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
