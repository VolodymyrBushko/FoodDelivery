import {Validators} from '@angular/forms';

export default {
  login: [Validators.required, Validators.pattern('[a-zA-Z]{4,}')],
  email: [Validators.required, Validators.email, Validators.pattern('')],
  phone: [Validators.required, Validators.pattern('[0-9]{12}')],
  imageUrl: [Validators.pattern('https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)')]
}
