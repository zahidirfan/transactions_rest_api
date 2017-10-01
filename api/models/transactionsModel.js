'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var FinancialSchema = new Schema({
  Category: {
    type: String,
    required: 'Kindly enter the transaction Category '
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  amount:{
    type: Number,
    required: 'Kindly enter the transaction amount'
  },
  status: {
    type: [{
      type: String,
      enum: ['credit', 'debit']
    }],
    default: ['credit']
  }
});

module.exports = mongoose.model('transactions', FinancialSchema);