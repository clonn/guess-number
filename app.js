
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    user = require('./routes/user'),
    http = require('http'),
    path = require('path'),
    stylus = require('stylus'),
    nib = require('nib'),
    server;

var app = express();


function compile(str, path) {
  return stylus(str).set('filename', path).set('compress', true).use(nib());
}

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(
    stylus.middleware({
      src: __dirname + '/public',
      compile: compile
    })
  );
  app.use(express.static(path.join(__dirname, 'public')));
});


app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.post('/sum', routes.sum);
//app.get('/users', user.list);

server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, 'NodeKonckout Broken!!!');
});

require('./io.server').io(server);
