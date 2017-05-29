var fs = require("fs");

var md =`
Sample data written to the file
===============================

*Murshid
*hassen

Lets use JS for better performance
==================================

hi


`;
// Aynschronous funtion
// md file system
fs.writeFile("sample.md", md.trim(),  function(err){
    console.log("file Created");
});





