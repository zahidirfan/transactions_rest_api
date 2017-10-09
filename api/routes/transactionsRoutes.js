'use strict';
module.exports = function(app) {
  var transaction = require('../controllers/transactionController'); 

  
  app.route ('/')
	.get(transaction.index);


  app.route('/transactions')
    .get(transaction.list_all_transactions)
    .post(transaction.create_a_transaction);


  app.route('/transactions/:transactionId')
    .get(transaction.read_a_transaction)
    .put(transaction.update_a_transaction)
    .delete(transaction.delete_a_transaction);
};
