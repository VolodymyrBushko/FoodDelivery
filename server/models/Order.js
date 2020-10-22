const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectID,
    default: null
  },
  date: {
    type: Date,
    default: new Date()
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  items: [{
    item: {
      type: mongoose.Schema.Types.ObjectID,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  }]
});

module.exports = mongoose.model('Order', schema);
