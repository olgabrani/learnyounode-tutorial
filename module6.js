var fs = require('fs');
var path = require('path');

module.exports = function(user_path, user_ext, callback){

  fs.readdir(user_path, function(err, data){
    if (err) {
      return callback(err);
    } 

    filtered = data.filter(function(el) {
      return  (path.extname(el) === '.' + user_ext) 
    });

    return callback(null, filtered);
  });
}
