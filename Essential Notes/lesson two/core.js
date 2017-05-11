// To Load Core or npm Modules(Custom JS files) to Our Program we Use the Require() function
var path = require('path');         // getting the path module
var util=require('util');           // getting the util module

console.log(path.basename(__filename));     // this will return the base module name

var uploadsDir= path.join(__dirname, 'www','files', 'uploads');                // this is to join Strings

console.log(uploadsDir);                                                       // this prints out the uploadsDir with custom added directories
//console.log(util);                                                              
util.log(uploadsDir);                                                                 // there is a util. log function which gives us the 
