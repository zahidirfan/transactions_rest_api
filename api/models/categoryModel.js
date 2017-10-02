'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CategorySchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the category name ',
    unique: true,
  },
  category_type: {
    type: Schema.ObjectId, 
    ref: 'CategoryType', 
    required: 'Kindly enter the category type'
  }
});

module.exports = mongoose.model('Category', CategorySchema);