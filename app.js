let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let favicon = require('serve-favicon');
const mongoose = require('mongoose');
const cfg = require('./cfg/cfg');
const pg = require('./playGround');

if(!cfg) {
    console.error('./cfg/cfg.js file not exists');
    process.exit(1);
}

let app = express();

if(cfg.web.cors) app.use(require('cors')());

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'fe', 'dist')));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', require('./routes/api'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({success: false, msg: err.message});
});

// DataBases
mongoose.connect(cfg.db.url, (err) => {
  if(err) return console.error(err);
  console.log('mongoose connected');
  pg.test.model();
});




module.exports = app;
