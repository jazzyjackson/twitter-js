var express = require('express');
var router = express.Router();
var client = require('../db');

module.exports = function() {
  router.get('/', function(req, res, next) {
    // query to grab the names and tweets
    client.query('SELECT users.name, tweets.content FROM users JOIN tweets ON users.id = tweets.userid', function(err, result) {
      if (err) return next(err); // pass errors to express
      var tweets = result.rows;
      res.render( 'index', {tweets: tweets , showForm: true, defaultName: ''});
    })
  });
  return router;
};


//   // query to grab names and tweets
//   client.query('SELECT users.name, tweets.content FROM users JOIN tweets ON users.id = tweets.userid', function(err, result) {
//     if (err) return next(err); // pass errors to express
//     var tweets = result.rows;
// })


