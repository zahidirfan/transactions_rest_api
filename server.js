
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Transaction = require('./api/models/transactionModel'), //created model loading here
  Category = require('./api/models/categoryModel'), //created model loading here
  Category_Type = require('./api/models/categoryTypeModel'), //created model loading here

  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
var db=mongoose.connect("mongodb://localhost/transactionsdb",{ useMongoClient: true });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var transaction_routes = require('./api/routes/transactionsRoutes'); //importing route
transaction_routes(app); //register the route


var category_routes = require('./api/routes/categoryRoutes'); //importing route
category_routes(app); //register the route


var category_type_routes = require('./api/routes/categoryTypeRoutes'); //importing route
category_type_routes(app); //register the route

app.listen(port);


console.log('Financial Transactions RESTful API server started on: ' + port);
