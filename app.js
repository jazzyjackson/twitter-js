var express = require('express');
var socketio = require('socket.io');
var app = express();
var volleyball = require('volleyball');
var nunjucks = require('nunjucks');
var routes = require('./routes/');
var bodyParser = require('body-parser');

var server = app.listen(3000, function() {console.log("server listening");})
var io = socketio.listen(server);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(volleyball);
app.use(routes(io));

app.use(express.static('public'));

app.use(function(err,req,res, next){
  console.log(err);
  res.sendStatus(400);
})


//
