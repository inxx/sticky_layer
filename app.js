const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

// router
const indexRouter = require('./routes/index');
const adminRouter = require('./routes/admin');

app.use(express.static(__dirname + '/public'));

app.get('/', indexRouter);
app.get('/admin', adminRouter);

app.listen(port, function(err) {
  console.log('Connected port' + port);
  if (err) {
    return console.log('Found error', err);
  }
})
 
