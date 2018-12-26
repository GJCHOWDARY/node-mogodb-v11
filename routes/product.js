var app = require('express'),
    path= require('path');

app = app.Router();



app.get('/static', function (req, res) {
  res.send('product route')
})

app.get('/static/addProduct', function (req, res) {
  res.sendFile(path.join(__dirname,'../','views','products.html'))
})

app.post('/static/addProduct', function (req, res) {
  res.send('product route')
})
module.exports = app;
