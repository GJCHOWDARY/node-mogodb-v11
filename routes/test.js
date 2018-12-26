var app = require('express'),
      path= require('path');

app = app.Router();


app.get('/', function (req, res) {
   res.send('test route')
})

module.exports = app;
