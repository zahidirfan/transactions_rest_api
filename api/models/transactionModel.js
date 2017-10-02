'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TransactionSchema = new Schema({
  category: {
    type: String,
    required: 'Kindly enter the transaction Category '
  },
  created_date: {
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

module.exports = mongoose.model('transaction', TransactionSchema);