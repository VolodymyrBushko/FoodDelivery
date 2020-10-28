import {Validators} from '@angular/forms';

export default {
  email: [Validators.required, Validators.email, Validators.pattern('')],
  phone: [Validators.required, Validators.pattern('[0-9]{12}')],
  address: [Validators.required, Validators.pattern('[a-zA-Z0-9_]{4,}')]
}
