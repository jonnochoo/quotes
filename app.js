var bodyParser = require('body-parser');
var compress = require('compression');
var config = require("./config");
var express = require('express');
var path = require('path')
var router = require('./routes');

var app = express();

app.set('port', config.express.port);
app.set("views", __dirname);
app.set("view engine", "jade");

app.use(express.static(path.join(__dirname, 'public')));
app.use(compress());
app.use(bodyParser());

// Used for returning AngularJS partials using Jade. 
app.get('/templates/:name', function (req, res) { 
  res.render('./templates/' + req.params.name); 
});
app.use('/', router);

app.listen(app.get('port'), function(){
  console.log("Server stared, listening on", app.get('port'));
});