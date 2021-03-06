/**
 * Some important stuff while running a node command in the terminal is that 
 * We don't necessariliy include the ".js" extension
 * Meaning while you node the command 
 * 		{ node global.js or node global } 
 * Are the same in any condition. Nodejs assumes that the file ran is a js extension
 * For more on global object visit ${ https://nodejs.org/api/globals.html }
 * For more on Path Object visit $ { https://nodejs.org/api/path.html }
 * Path varies according to POSIX in UNIX or Windows Systems
 */

var path = require("path");				// require function is also available globally
										// this is to get the global path name of the current file only
console.log("Murshid Hassen");			// To run the file node global.js
global.console.log("this is a global object");	//console object is available as a global object(Name space), this will work
						// both are the same in sense
var murshidvalue="Hi I am Murshid";		// this is global variable declarations
console.log(global.murshidvalue);		// we will get something like undefined
						// Be cause nodejs works something different to when it stores global variables 
console.log(murshidvalue);			// this is not in the global scope
						// Now we can see that it prints the string in the value
var murshidInitial="Musadique Hassen";		// Adding a template string 
						// Since Node jS supports ES6
var mynamewithInitails=murshidInitial.slice(9);		//picking the exact charactors from a string
console.log(mynamewithInitails);		// this is one way call	
console.log(`${mynamewithInitails}`+"this is as same as the jquery call");	// this is a call
console.log(__dirname);		// this gives us the module directory
console.log(__filename);	// this gives us the full path directory and the filename 	 
console.log("Path name of the file only:  "+ `${path.basename(__filename)}`);	// this get the global path name only and this will retun only the path name
console.log(path.dirname(__filename));	// 
							