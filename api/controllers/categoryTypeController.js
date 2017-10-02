'use strict';

var mongoose = require('mongoose'),
category_type = mongoose.model('CategoryType');

exports.list_all_category_types= function(req, res) {
  category_type.find({}, function(err, category_type) {
    if (err)
      res.send(err);
    res.json(category_type);
  });
};


exports.create_a_category_type = function(req, res) {
  var new_category_type = new category_type(req.body);
  new_category_type.save(function(err, category_type) {
    if (err){
      res.send(err);
    }
  });
};


exports.read_a_category_type = function(req, res) {
  category_type.findById(req.params.category_typeId, function(err, category_type) {
    if (err)
      res.send(err);
    res.json(category_type);
  });
};


exports.update_a_category_type = function(req, res) {
  category_type.findOneAndUpdate({_id: req.params.category_typeId}, req.body, {new: true}, function(err, category_type) {
    if (err)
      res.send(err);
    res.json(category_type);
  });
};


exports.delete_a_category_type = function(req, res) {
  category_type.remove({
    _id: req.params.category_typeId
  }, function(err, category_type) {
    if (err)
      res.send(err);
    res.json({ message: 'category_type successfully deleted' });
  });
};