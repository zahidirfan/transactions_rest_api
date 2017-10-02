'use strict';
module.exports = function(app) {
  var category_type = require('../controllers/categoryTypeController'); 


  // todoList Routes
  app.route('/category_types')
    .get(category_type.list_all_category_types)
    .post(category_type.create_a_category_type);


  app.route('/category_types/:categoryId')
    .get(category_type.read_a_category_type)
    .put(category_type.update_a_category_type)
    .delete(category_type.delete_a_category_type);
};
