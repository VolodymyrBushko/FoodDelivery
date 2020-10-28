import {Validators} from '@angular/forms';

export default {
  email: [Validators.required, Validators.email, Validators.pattern('')],
  password: [Validators.required, Validators.pattern('[a-zA-Z0-9_]{8,}')]
}
