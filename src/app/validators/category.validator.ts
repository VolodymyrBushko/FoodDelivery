import {Validators} from '@angular/forms';

export default {
  name: [Validators.required, Validators.pattern('[a-zA-Zа-яА-Яі\\s]{4,}')],
  imageUrl: [Validators.pattern('https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)')]
};
