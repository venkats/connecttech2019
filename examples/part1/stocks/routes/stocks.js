var express = require('express');
var router = express.Router();

var stocks = [
  { ticker: 'TSLA', price: 260 },
  { ticker: 'GOOG', price: 1245 },
  { ticker: 'AAPL', price: 235 },
  { ticker: 'AMZN', price: 1760 }  
];                 

router.get('/', function(req, res, next) {
  res.send(stocks);
});

module.exports = router;
