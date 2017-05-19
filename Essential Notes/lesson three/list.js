// we need the file system module to interact with whatever we have in the process function
var fs =require("fs");  // fs module for need works
// we are creating an asynchronous read function 
var files = fs.readdirSync('./lib');

fs.readdirSync('./lib', function (err, vale){
    if (err){
        throw err
    }
    console.log(vale);
})


console.log(files);
console.log("reading files finished");




