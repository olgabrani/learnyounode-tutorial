myModule = require('./module6');

myModule(process.argv[2], process.argv[3], function(err, list){
  if (err) {
    return;
  }
  list.forEach(function(el) {
    console.log(el);
  });

});
