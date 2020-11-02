const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schema = new Schema({

  user: {
    type: mongoose.Schema.Types.ObjectID,
    ref: 'User',
    default: null
  },
  date: {
    type: Date,
    default: new Date()
  },
  post: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Feedback', schema);
