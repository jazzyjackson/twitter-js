var express = require('express');
var router = express.Router();
var client = require('../db');

module.exports = function() {
    router.get('/users/:name', function(req, res, next) {
    // query to grab the names and tweets
    client.query('SELECT users.name, tweets.content FROM users JOIN tweets ON users.id = tweets.userid WHERE users.name = ' + "'" + req.params.name.split('%20').join(' ') + "'", function(err, result) {
      if (err) return next(err); // pass errors to express
      var tweets = result.rows;
      res.render( 'index', {tweets: tweets , showForm: true, defaultName: ''});
    })
  });

  router.get('/', function(req, res, next) {
    // query to grab the names and tweets
    client.query('SELECT users.name, tweets.content FROM users JOIN tweets ON users.id = tweets.userid', function(err, result) {
      if (err) return next(err); // pass errors to express
      var tweets = result.rows;
      res.render( 'index', {tweets: tweets , showForm: true, defaultName: ''});
    })
  });

  router.post('/tweets', function(req, res, next){
    client.query('INSERT INTO tweets (userid, content) VALUES ($1, $2)', [req.body.name, req.body.text], function (err, data) {
      if (err) return next(err);
      res.redirect('/');
    })
  })
  return router;
};


