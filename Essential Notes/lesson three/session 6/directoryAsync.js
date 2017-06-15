var fs= require('fs');
// removing the directory from a file
fs.rmdir("./assets", function(err){
    if(err){
        throw err;
    }
    
       console.log("Direcotory removed");
    
});

// this will initially throw us an error 
// because the log directory we are trying to remove is not empty
// one key thing to note is that always we want the removing directory to be empty 
fs.rmdir("./logs", function (err){
    if(err){
        throw err
    }
    console.log("directory Removed");
});