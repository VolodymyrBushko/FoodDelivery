const {body} = require('express-validator');

module.exports = [

  body('user')
    .trim()
    .isString()
    .optional()
    .withMessage('invalid userId'),

  body('date')
    .trim()
    .isString()
    .optional()
    .withMessage('invalid date'),

  body('email')
    .trim()
    .isEmail()
    .notEmpty()
    .normalizeEmail()
    .withMessage('invalid email'),

  body('address')
    .trim()
    .isString()
    .notEmpty()
    .withMessage('invalid address'),

  body('totalPrice')
    .trim()
    .isNumeric()
    .notEmpty()
    .withMessage('invalid totalPrice'),

  body('items')
    .isArray()
    .notEmpty()
    .withMessage('invalid order')

];
