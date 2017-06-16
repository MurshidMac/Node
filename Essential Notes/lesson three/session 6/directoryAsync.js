var fs= require('fs');
/*
// removing the directory from a file
fs.rmdir("./assets", function(err){
    if(err){
        throw err;
    }
    
       console.log("Direcotory removed");
    
});
*/
// this was actually removed from the earlier run

// this call returns an array of values
fs.readdirSync("./logs").forEach(function (filename){
    fs.unlinkSync("./logs/"+filename);
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