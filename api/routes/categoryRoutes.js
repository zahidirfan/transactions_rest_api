'use strict';
module.exports = function(app) {
  var category = require('../controllers/categoryController'); 


  // todoList Routes
  app.route('/categories')
    .get(category.list_all_categories)
    .post(category.create_a_category);


  app.route('/categories/:categoryId')
    .get(category.read_a_category)
    .put(category.update_a_category)
    .delete(category.delete_a_category);
};
