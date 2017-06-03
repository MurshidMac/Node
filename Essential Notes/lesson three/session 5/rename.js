var fs= require("fs");

fs.renameSync("./lib/project-config.js","./lib/project-config.json");
// great to use the same rename file function to replace a folder from one path to another

console.log("Configure.json file is renamed");

fs.rename("./lib/notes.md","./notes.md", function (err) {
    if(err){
        console.log(err);
    }else{
        console.log("Notes.md file moved from one diretory");
    }
});






