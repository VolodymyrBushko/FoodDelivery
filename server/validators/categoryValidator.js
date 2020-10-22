const {body} = require('express-validator');

module.exports = [

  body('name')
    .trim()
    .notEmpty()
    .isString()
    .isLength({min:4})
    .withMessage('invalid category name'),

  body('imageUrl')
    .trim()
    .optional()
    .isURL()
    .withMessage('invalid category imageUrl')

];
