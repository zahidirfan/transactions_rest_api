'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CategoryTypeSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: 'Kindly enter the category name '
  }
});

module.exports = mongoose.model('CategoryType', CategoryTypeSchema);