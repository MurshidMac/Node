var fs= require('fs');

fs.mkdir("lib", function (err){
    if(err){
        console.log("throwing an error"+ err);
    }
    else{
        console.log("Directory Created");
    }
});

