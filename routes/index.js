var express = require('express');
var router = express.Router();

var tweetBank = require('../tweetBank');


router.get('/', function(req, res){
  var tweets = tweetBank.list();
  res.render( 'index', {tweets: tweets });
})



//router.get('/stylesheets/style.css', function(req,res){
//  console.log(__dirname);
//  res.sendFile('/stylesheets/style.css', {root: __dirname + '/../public/'});
//})

module.exports = router;
