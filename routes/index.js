var express = require('express');
var router = express.Router();
var tweetBank = require('../tweetBank');
var bodyParser = require('body-parser');





//router.get('/stylesheets/style.css', function(req,res){
//  console.log(__dirname);
//  res.sendFile('/stylesheets/style.css', {root: __dirname + '/../public/'});
//})

module.exports = function(io){
  router.get('/users/:name', function(req,res){
    var tweets = tweetBank.find({'name':req.params.name});
    res.render('index', {tweets: tweets , showForm: true, defaultName: req.params.name});
  })

  router.get('/', function(req, res){
    var tweets = tweetBank.list();
    res.render( 'index', {tweets: tweets , showForm: true, defaultName: ''});
  })

  router.get('/tweets/:id', function(req,res){
    var tweets = tweetBank.list();
    var thisTweet = tweets[Number(req.params.id)];
    res.render( 'index', {tweets: [thisTweet] , showForm: true, defaultName: ''});
  });


  router.post('/tweets', function(req,res){
    var name = req.body.name;
    var text = req.body.text;
    tweetBank.add(name, text);
    io.sockets.emit('newTweet',{name: name, text: text})
    res.redirect('/');
  })



  return router;
}
