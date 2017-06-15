var fs= require('fs');
// removing the directory from a file
fs.rmdir("./assets", function(err){
    if(err){
        throw err;
    }
    
       console.log("Direcotory removed");
    
});

fs.rmdir("./logs", function (err){
    if(err){
        throw err
    }
    console.log("directory Removed");
});