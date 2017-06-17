var fs= require('fs');  // fs module

fs.readFile("./chat.log", "UTF-8", function(err, chatLogs){
    if(err){
        throw err
    }else{
        console.log(`FileRead  ${chatLogs.length}`);
    }
    
});
console.log("Filese reading");
