var bodyParser = require('body-parser');
var config = require("./config");
var compress = require('compression');
var express = require('express');
var mongoose = require('mongoose');
var path = require('path')

mongoose.connect(config.mongodb.connectionString);

var app = express();

app.set('port', process.env.PORT || 3000);
app.set("views", __dirname);
app.set("view engine", "jade");

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components/foundation')));
app.use(compress());
app.use(bodyParser());

// Used for returning AngularJS partials using Jade. 
app.get('/partials/:name', function (req, res) { 
  res.render('./web/partials/' + req.params.name); 
});
require("./api/tags")(app);
require("./api/routes")(app);
require("./web/routes")(app);

app.listen(app.get('port'));