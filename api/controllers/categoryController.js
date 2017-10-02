'use strict';

var mongoose = require('mongoose'),
category = mongoose.model('Category');

exports.list_all_categories = function(req, res) {
  category.find({}, function(err, category) {
    if (err)
      res.send(err);
    res.json(category);
  });
};


exports.create_a_category = function(req, res) {
  var new_category = new category(req.body);
  new_category.save(function(err, category) {
    if (err){
      res.send(err);
    }
  });
};


exports.read_a_category = function(req, res) {
  category.findById(req.params.categoryId, function(err, category) {
    if (err)
      res.send(err);
    res.json(category);
  });
};


exports.update_a_category = function(req, res) {
  category.findOneAndUpdate({_id: req.params.categoryId}, req.body, {new: true}, function(err, category) {
    if (err)
      res.send(err);
    res.json(category);
  });
};


exports.delete_a_category = function(req, res) {
  category.remove({
    _id: req.params.categoryId
  }, function(err, category) {
    if (err)
      res.send(err);
    res.json({ message: 'category successfully deleted' });
  });
};