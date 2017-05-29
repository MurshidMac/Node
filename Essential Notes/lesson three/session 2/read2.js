var fs= require("fs");    // file system module
var path= require("path");
//var contents= read.readFileSync('./lib/sayings.md', "UTF-8");
//var contenstWithoutTextEncoding = read.readFileSync('./lib/sayings/md');

//console.log(contents);
//console.log(contenstWithoutTextEncoding);
// here what we do is we use several file system to combine many file system to read all from the directory
// function readdir is to read the directory and the currently to load the path
fs.readdir("./lib", function (err, files){
    files.forEach(function (fileName){
        var file= path.join(__dirname, "lib", fileName);    // this creates a fullpath to the current directory
        var stats= fs.statSync(file);
        if(stats.isFile() && fileName !== ".DS_Store"){
            fs.readFile(file, "UTF-8", function (err, contents){
                console.log(contents);
            });
        }
    })
});

