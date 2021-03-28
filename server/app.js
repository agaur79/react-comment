var createError = require('http-errors');
var express = require('express');
var path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var commentRouter = require('./routes/comment');

var app = express();
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost:27017/comment',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) return console.log(`app.js err ${err}`);
    return console.log('Connected to MongoDB');
  });
mongoose.set('debug', true);

app.use('/', indexRouter);
app.use('/comment', commentRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
