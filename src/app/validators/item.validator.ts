import {Validators} from '@angular/forms';

export default {
  name: [Validators.required, Validators.pattern('[a-zA-Zа-яА-Яі\\s]{4,20}')],
  price: [Validators.required, Validators.pattern('[0-9]+')],
  description: [Validators.required, Validators.pattern('[a-zA-Zа-яА-Яі\\s0-9.,!?()-]{6,200}')],
  imageUrl: [Validators.pattern('https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)')],
  weight: [Validators.required, Validators.pattern('[0-9]+')]
};
