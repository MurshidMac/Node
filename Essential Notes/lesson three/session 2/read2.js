var read= require("fs");    // file system module
var contents= read.readFileSync('./lib/sayings.md', "UTF-8");

console.log(contents);
