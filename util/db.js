const fs = require('fs'),
      config =require('./database'),
      mongodb = require('mongodb'),
      MongoClient = mongodb.MongoClient;

 var environment_db_config = function() {
    var environment = process.env.NODE_ENV;
    console.log(environment,"ooooooo");
    return config[environment];
}();

// console.log(environment_db_config,"pppppp");
// var state = {
//   pool: null,
// }
//
// exports.connect = function(done){
// 	state.pool = mysql.createPool({
// 		host: environment_db_config.host,
//   	user: environment_db_config.username,
//   	password: environment_db_config.password,
//   	database: environment_db_config.database
//   	})
// 	done()
// }
//
// exports.get = function() {
//   return state.pool
// }

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://chowdary:kRJMXOMYERaHOJj2@cluster0-h8j8p.mongodb.net/chowdary?retryWrites=true', { useNewUrlParser: true }
   )
    .then(client => {
      console.log('Connected!');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
