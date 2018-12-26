const http=require('http'),
      express=require('express'),
      path=require('path'),
      bodyParser=require('body-parser'),
      app=express();

// const db = require(path.resolve('util')).dbConfig;
const mongoConnect = require('./util/db').mongoConnect;
const User = require('./models/user');


app.set('view engine','ejs');
// TODO: views/template path
app.set('views','views')
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public') ))

app.use((req, res, next) => {
  User.findById('5c22727015f16c061760ec62')
    .then(user => {
      req.user = new User(user.username, user.email, user.cart, user._id);
      console.log(req.user,"ffff");
      next();
    })
    .catch(err => console.log(err));
});

 //Making DB Connection for mysql
  // db.connect(function(err) {
  //   if (err) {
  //     console.log('Unable to connect to MySQL.')
  //     process.exit(1)
  //   } else {
  //     console.log('MySQL Successfull');
  //   }
  // })

const helpers=require('./util/helpers');

const admin=require('./routes/admin'),
      user=require('./routes/user'),
      customer=require('./routes/customer'),
      product=require('./routes/product'),
      test=require('./routes/test'),
      index=require('./routes/index'),
      shopRoutes = require('./routes/shop');

      app.use('/',index);
      app.use('/users',user);
      app.use('/admin',admin);
      app.use('/customer',customer);
      app.use('/product',product);
      app.use('/test',test);
      app.use(shopRoutes);


      // app.use((req,res,next)=>{
      //   var products=[{'title':'apple'},{'title':'orange'},{'title':'banana'}]
      //   // TODO: ejs render
      //   // res.render('test',{
      //   //   pageTitle:'page not found',
      //   //   prods:products,
      //   //   path:'/',
      //   //   hasProducts:products.length>0
      //   // })
      //   res.status(404).send({'status':'page not found!'})
      // })
 mongoConnect(client => {
  app.listen(3000);
});
