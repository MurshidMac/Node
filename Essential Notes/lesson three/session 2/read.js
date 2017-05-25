var fs = require("fs"); // require the fs module

// this is asychronous nature 
var read = fs.readdirSync('./lib');  // this will be text
console.log(read);

// reading files sychronously will block all the single node js thread
//var readwithoutSync= fs.readdir('./lib');
//console.log(readwithoutSync);
// this is the sycnhronous nature

fs.readdir('./lib', function(err, files){
    if (err){
        throw err
    }
    console.log(read);
});
console.log("reading files");