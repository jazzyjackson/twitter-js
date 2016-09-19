var express = require('express');
var app = express();
var volleyball = require('volleyball');

app.use(volleyball);
app.get('/', function(req, rep, next){
    rep.send('I AM DOING SOMETHING')
    //next();
})

app.listen(8080, function() {console.log("server listening");})
