// we will be covering the remove function from the config.json file
// we are gonna remove two unwanted links from the file system
var fs= require("fs");
// we need to remove the files from the project 
// Since its sync it has to be try catched
try{
    fs.unlinkSync("./remove.json");
}catch(err){
    console.log(err);
}







