'use strict';
module.exports = function(app) {
  var transactions = require('../controllers/transactionsController'); 


  // todoList Routes
  app.route('/transactions')
    .get(transactions.list_all_transactions)
    .post(transactions.create_a_transaction);


  app.route('/transactions/:transactionId')
    .get(transactions.read_a_transaction)
    .put(transactions.update_a_transaction)
    .delete(transactions.delete_a_transaction);
};
