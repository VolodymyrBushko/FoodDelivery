const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 20
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectID,
    ref: 'Category',
    required: true
  },
  description: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 36
  },
  imageUrl: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Item', schema);
