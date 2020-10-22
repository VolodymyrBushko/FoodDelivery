const {body} = require('express-validator');
const User = require('../models/User');
module.exports = [

  body('login')
    .trim()
    .notEmpty()
    .isString()
    .isLength({min: 4})
    .withMessage('invalid user login'),
  body('email')
    .notEmpty()
    .isEmail()
    .normalizeEmail()
    .custom(value => {
      return User.findOne({email: value}).then(user => {
        if (user) {
          return Promise.reject('E-mail already in use');
        }
      })
    })
    .withMessage('invalid user email'),
  body('password')
    .trim()
    .notEmpty()
    .isString()
    .isLength({min: 8})
    .custom((value, {req}) => {
      if (value !== req.body.password) {
        throw new Error('Password confirmation does not match password');
      }
      return true;
    })
    .withMessage('invalid user password')
  ,
  body('phone')
    .trim()
    .notEmpty()
    .isNumeric()
    .isMobilePhone('uk-UA')
    .withMessage('invalid user phone')
  ,
  body('imageUrl')
    .trim()
    .optional()
    .isURL()
    .withMessage('invalid user imageUrl')
];
