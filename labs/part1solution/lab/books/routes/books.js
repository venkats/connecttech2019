var express = require('express');
var router = express.Router();

var books = [
  { title: 'Who Moved My Cheese?', author: 'Spencer Johnson', year: 1998, quantity: 10 },
  { title: 'The Checklist Manifesto: How to Get Things Right', author: 'Atul Gawande', year: 2011, quantity: 25 },
];   

router.get('/', function(req, res, next) {
  res.send(books);
});

module.exports = router;
