var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//////DataBase Stuff///
require('./server/config/mongoose.js');

///routes ///

var routes_setter = require('./server/config/routes.js');

routes_setter(app);

///server///
var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});
