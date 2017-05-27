var read= require("fs");    // file system module
var contents= read.readFileSync('./lib/sayings.md', "UTF-8");
var contenstWithoutTextEncoding = read.readFileSync('./lib/sayings/md');

console.log(contents);
console.log(contenstWithoutTextEncoding);