var fs = require('fs');
var arr, str;
if (process.argv.length !== 3) {
  console.log('Error: You should supply a file path as an argument');
  return;
}
fs.readFile(process.argv[2], 'utf-8', function(err, data) {
  if (err) {
    console.log('you did shit', err);
    return;
  }
  var str = data.toString();
  var arr = str.split('\n');
  console.log(arr.length - 1);
});

