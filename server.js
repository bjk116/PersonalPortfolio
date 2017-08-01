//Dependencies
var express = require('express');
var bodyParser = require('body-parser');


//Set up port and express app
var port = process.env.port || 3000;
var app = express();

//Allow views to access public folder
app.use(express.static('public'));


//Set up express to use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

//Set up handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Set up routes
require('./routes/html-routes.js')(app);

app.listen(port, function() {
	console.log('App listening on ' + port);
});