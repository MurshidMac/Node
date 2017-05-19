// we need the file system module to interact with whatever we have in the process function
var fs =require("fs");  // fs module for need works
// we are creating an asynchronous read function 
var files = fs.readdirSync('./lib');

console.log(files);




