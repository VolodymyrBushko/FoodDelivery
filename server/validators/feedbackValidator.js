const {body} = require('express-validator');

module.exports = [



  body('imageUrl')
    .trim()
    .optional()
    .isURL()
    .withMessage('invalid feedback imageUrl'),

  body('date')
    .optional()
    .isDate()
    .withMessage('invalid feedback date'),

  body('post')
    .trim()
    .notEmpty()
    .isString()
    .isLength({min: 4})
    .withMessage('invalid feedback post'),
];
