import {Component, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

import {AuthService} from '../../services/auth.service';
import validators from '../../validators/register.validator';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnDestroy {

  form: FormGroup;
  sub: Subscription;

  constructor(
    private auth: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      'login': [null, validators.login],
      'email': [null, validators.email],
      'phone': [null, validators.phone],
      'imageUrl': [null, validators.imageUrl],
      'password': [null, validators.password],
      'confirm': [null, validators.confirm]
    });
  }

  onSubmit(): void {
    const {password, confirm} = this.form.value;
    if (password === confirm) {
      this.form.disable();
      this.sub = this.auth.register(this.form.value).subscribe(
        () => this.router.navigate(['/login']),
        err => {
          this.form.enable();
          console.log(err || err.message);
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
