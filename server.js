
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Transaction = require('./api/models/transactionsModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
var db=mongoose.connect("mongodb://localhost/transactionsdb",{ useMongoClient: true });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/transactionsRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('Financial Transactions RESTful API server started on: ' + port);
