var app = require('express'),
app = app.Router();


app.get('/', function (req, res) {
  res.send('customer route')
})

module.exports = app;
