var fs= require('fs');  // fs module

// this leads to memory allocaltion
/*
fs.readFile("./chat.log", "UTF-8", function(err, chatLogs){
    if(err){
        throw err
    }else{
        console.log(`FileRead  ${chatLogs.length}`);
    }
    
});
console.log("Filese reading");
*/
// this is use a custom method in the file input stream

var stream= fs.createReadStream("./chat.log", "UTF-8");

var data="";
// reading a data event is raised when data is passed

stream.once("data", function(){
    console.log("\n\n\n");
    console.log("Started Reading the file");
    console.log("\n\n\n");
    

}); 

stream.on("data", function(chunk){
    process.stdout.write(`chunk: ${chunk.length}`);

    data+=chunk;

});

stream.on("end", function(){
    console.log("\n\n\n");
    console.log("Ended Reading");
    console.log("\n\n\n");

})












