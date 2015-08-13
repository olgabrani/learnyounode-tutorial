# [learnyounode](https://github.com/workshopper/learnyounode) exerices

The answers I gave while going through the tutorial about learning the basics 
of node: asynchronous i/o, http.

## Things I learned

### 1. Hello world 

To make a Node.js program run, create a new file with `.js` extension and run
```
node program.js
```

### 2. Babysteps

Sometimes the simpler solutions are the better. *(Compare my solution with the official solution :S)*

[Here](http://stackoverflow.com/questions/4090518/string-to-int-use-parseint-or-number) is the difference between parseInt and Number()

[reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) can be used in ES6. 

### 3. My first I/O

Voila [wc man page](http://linux.die.net/man/1/wc)

It is fun to play with errors and special cases.
Extremely useful:
```javascript
try {

} catch(err) {

}
```

In order to read the contents of a file I have to use the `fs` node module and 
then run use:
```javascript
// The content of the file as a string
var contents =fs.readFileSync(process.argv[2], 'utf8')
```

### 6. Make it modular

A tricky one! 
I should bare in mind that when a user calls a function from a module, she 
decides on what she will do with the data returned. It makes sense that the
`console.log(file)` part will be in the main js file and not in the module
itself.

### 8. HTTP collect

A server response toString() is -duh- a sting. Consequently, to get the number
of characters, I just have to do str.length
