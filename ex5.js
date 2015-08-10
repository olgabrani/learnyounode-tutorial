var fs = require('fs');
var path = require('path');

var user_path = process.argv[2];
var user_ext = '.'+process.argv[3];
var files = [];

fs.readdir(user_path, function(err, data){
  data.forEach(function(el) {
    if (path.extname(el) === user_ext) {
      console.log(el);
    };
  });
})
