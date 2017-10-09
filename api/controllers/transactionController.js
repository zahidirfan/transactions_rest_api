'use strict';

var mongoose = require('mongoose'),
transaction = mongoose.model('transaction');


exports.index=function(req, res) {
  res.json("{Hello : From Zahid Irfan");
}

exports.list_all_transactions = function(req, res) {
  transaction.find({}, function(err, transaction) {
    if (err)
      res.send(err);
    res.json(transaction);
  });
};


exports.create_a_transaction = function(req, res) {
  var new_transaction = new transaction(req.body);
  new_transaction.save(function(err, transaction) {
    if (err){
      res.send(err);
    }
  });
};


exports.read_a_transaction = function(req, res) {
  transaction.findById(req.params.transactionId, function(err, transaction) {
    if (err)
      res.send(err);
    res.json(transaction);
  });
};


exports.update_a_transaction = function(req, res) {
  transaction.findOneAndUpdate({_id: req.params.transactionId}, req.body, {new: true}, function(err, transaction) {
    if (err)
      res.send(err);
    res.json(transaction);
  });
};


exports.delete_a_transaction = function(req, res) {
  transaction.remove({
    _id: req.params.transactionId
  }, function(err, transaction) {
    if (err)
      res.send(err);
    res.json({ message: 'transaction successfully deleted' });
  });
};