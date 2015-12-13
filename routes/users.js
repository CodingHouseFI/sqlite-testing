'use strict';

var path = require('path');
var express = require('express');
var router = express.Router();
var db = require('../config/db')('../data/mydata.db');

module.exports = function() {

  router.get('/', function(req, res, next) {
    db.all('select * from users', function(err, data) {
      res.send({data:data, err: err});
    });
  });

  router.post('/', function(req, res) {
    var user = req.body; // {name: 'cade', email: 'c@c.c'}
    db.run('insert into users values ($name, $email)', {
      $name: user.name,
      $email: user.email
    }, function(err){
      res.status(err ? 400 : 200).send(err);
    });
  });

  return router;
};
