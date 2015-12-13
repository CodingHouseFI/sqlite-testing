var express = require('express');
var router = express.Router();

var db = require('../config/db')('../data/mydata.db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  db.all('select * from users', function(err, data) {
    res.send({data:data, err: err});
  });
});

module.exports = router;
