/**
 * Module dependencies.
 */

var express = require('express')
  , morgan = require('morgan')
  , bodyParser = require('body-parser')
  , cookieParser = require('cookie-parser')
  , errorhandler = require('errorhandler')
  , methodOverride = require('method-override')
  , favicon = require('serve-favicon')
  , http = require('http')
  , path = require('path')

  , db = require('./db')
  , routes = require('./routes')
  , api = require('./routes/api');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//app.use(favicon()); // requires PATH to favicon
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

// development only
var env = process.env.NODE_ENV || 'development';
if('development' == env) {
   app.use(errorhandler());
}

// serve index and view partials
app.get('/', routes.index);
app.get('/partials/:view', routes.partials);

// REST API
app.get('/api/users', api.getUsers);
app.get('/api/users/:id', api.getUser);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
