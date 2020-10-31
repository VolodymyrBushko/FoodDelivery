const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schema = new Schema({

  imageUrl: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: new Date()
  },
  post:{
    type:String,
    required:true
  }
});

module.exports = mongoose.model('Feedback', schema);
