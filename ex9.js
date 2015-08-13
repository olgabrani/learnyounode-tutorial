var bl = require('bl');
var http = require('http');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var cnt = 0;
var res = [];

function printRes(){
  res.forEach(function(el) {
    console.log(el);
  })
  
}

function tell(url, index) {
  http.get(url, function(response){
    response.setEncoding('utf8');

    response.pipe(bl(function (err, data) {
      if (err) {
        console.log(err);
      }
      res[index] = data.toString();
      cnt++;
      if (cnt === 3)  {
        printRes();
      }
    }));
  })
};

tell(url1, 0);
tell(url2, 1);
tell(url3, 2);
