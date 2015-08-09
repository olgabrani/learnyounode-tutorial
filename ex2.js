// `process.argv` returns an array
// argv[0] is always `node`
// arg[1] is the path of the .js file we will use
// the rest of the array is the command line arguments supplied 
var args = process.argv;

// leave only the numbers supplied
var nums = args.slice(2);

if (nums.length === 0 ) {
  console.log('you have not supplied any numbers to add');
  return;
}

// http://stackoverflow.com/questions/4090518/string-to-int-use-parseint-or-number

// Add the array values
var sum = nums.reduce( function(a, b) {
  return Number(a) + Number(b);
});

console.log(sum);
