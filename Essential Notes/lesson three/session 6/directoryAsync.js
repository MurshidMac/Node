var fs= require('fs');
// removing the directory from a file
fs.rmdir("./assets", function(err){
    if(err){
        throw err;
    }else{
        console.log("Direcotory removed");
    }
});
