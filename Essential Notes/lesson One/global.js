console.log("Murshid Hassen");			// To run the file node global.js
global.console.log("this is a global object");	//console object is available as a global object(Name space), this will work
						// both are the same in sense
var murshidvalue="Hi I am Murshid";		// this is global variable declarations
console.log(global.murshidvalue);		// we will get something like undefined
						// Be cause nodejs works something different to when it stores global variables 
console.log(murshidvalue);			// this is not in the global scope
						// Now we can see that it prints the string in the value
