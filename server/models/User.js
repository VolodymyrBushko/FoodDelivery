const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  login: {
    type: String,
    required: true,
    minlength: 4
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  phone: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('User', schema);
