const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const fs = require('fs');
const https = require('https');
const logger = require('morgan');
const mongoose = require('mongoose');
const sslport = 3443;

mongoose.connect(`mongodb://127.0.0.1:27017/psychology-today`, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true
});
mongoose.connection.once('open', function() {
  console.log('MongoDB connection successful');
});

const routes = require('./routes/index');
const ping = require('./routes/ping');
const events = require('./routes/events');
const books = require('./routes/books');
const version = require('./routes/version');
const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', routes);
app.use('/ping', ping);
app.use('/events', events);
app.use('/books', books);
app.use('/version', version);

var privateKey = fs.readFileSync('ssl/server-key.pem');
var certificate = fs.readFileSync('ssl/server-cert.pem');

https
  .createServer(
    {
      key: privateKey,
      cert: certificate
    },
    app
  )
  .listen(sslport, function() {
    console.log(new Date().toISOString() + ': server started securely on ' + sslport);
  });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});

module.exports = app;
