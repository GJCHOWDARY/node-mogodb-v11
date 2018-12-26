var app = require('express'),
      path= require('path');

app = app.Router();


app.get('/static', function (req, res) {
  res.sendFile(path.join(__dirname,'../','views','home.html'))
  // res.send('index route')
})

module.exports = app;
