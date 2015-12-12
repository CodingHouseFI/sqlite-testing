'use strict';

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

var express = require('express');
var router = express.Router();

db.run('create table users (name, email)');

router.get('/', function(req, res, next) {
  db.all('select * from users', function(err, users){
    res.status(err ? 400 : 200).send(err || users);
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

module.exports = router;
