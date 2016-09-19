var express = require('express');
var app = express();
var volleyball = require('volleyball');

var nunjucks = require('nunjucks');
nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(volleyball);
app.get('/', function(req, res, next){
    var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
    res.render( 'index', {title: 'Hall of Fame', people: people} );
    //next();
})


app.listen(3000, function() {console.log("server listening");})
