var app = require('express'),
app = app.Router();


app.get('/', function (req, res) {
  res.send('user route')
})

module.exports = app;
