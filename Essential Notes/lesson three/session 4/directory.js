var fs= require('fs');

if(fs.exists("lib")){
    console.log("Directory Already there");
}

fs.mkdir("lib", function (err){
    if(err){
        console.log("throwing an error"+ err);
    }
    else{
        console.log("Directory Created");
    }
});

