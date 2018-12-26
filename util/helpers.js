const path=require('path'),
      crypto=require('crypto');

var helpers={};

// TODO: hash password
helpers.hash=function (str) {
   var hashSecret=config[process.env.NODE_ENV].hashSecret
  var hash=crypto.createHmac('sha256',hashSecret).update(str).digest('hex');
  return hash;
};



helpers.dirName=path.dirname(process.mainModule.filename)


module.exports=helpers;
