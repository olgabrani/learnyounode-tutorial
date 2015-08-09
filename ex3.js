var fs = require('fs');
if (process.argv.length !== 3) {
  console.log('Error: You should supply a file path as an argument');
  return;
}
try {
  var buffer = fs.readFileSync(process.argv[2]);
} catch(err) {
  console.log('Error: ', err);
  return;
}
var str = buffer.toString();
var arr = str.split('\n');
console.log(arr.length - 1);
