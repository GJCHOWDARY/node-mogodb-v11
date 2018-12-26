var app = require('express'),
    path= require('path'),
    adminController = require('../controllers/admin'),
    helpers=require('../util/helpers');

app = app.Router();

app.get('/', function (req, res) {
  res.send('admin page')
})

app.post('/', function (req, res) {
  res.send('admin post page')
})

app.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
app.get('/products', adminController.getProducts);

// /admin/add-product => POST
app.post('/add-product', adminController.postAddProduct);

app.get('/edit-product/:productId', adminController.getEditProduct);

app.post('/edit-product', adminController.postEditProduct);

app.post('/delete-product', adminController.postDeleteProduct);


app.use((req,res,next)=>{
  // res.sendFile(path.join(__dirname,'../','views','404.html'))
  res.sendFile(path.join(helpers.dirName,'../','views','404.html'))

})

module.exports = app;
