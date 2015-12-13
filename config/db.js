'use strict';

var sqlite3 = require('sqlite3').verbose();
var path = require('path');

module.exports = function(dbpath) {
  var db = new sqlite3.Database(path.join(__dirname, dbpath));

  db.get('select * from users', function(err, data){
    if(!err) return;
    db.run('CREATE TABLE users (name, email)')
  });

  return db;  
};
