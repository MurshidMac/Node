var fs = require("fs"); // require the fs module

// this is the sychronously nature
 
var read = fs.readdirSync('./lib');  // this will be text
console.log(read);

// reading files sychronously will block all the single node js thread
//var readwithoutSync= fs.readdir('./lib');
//console.log(readwithoutSync);

// this is asychronous nature
fs.readdir("./lib","UTF-8", function (err, files){
    if (err){
        console.log(err);
    }
    console.log(files);
});
console.log("reading files");