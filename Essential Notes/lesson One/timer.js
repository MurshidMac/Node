// we will be working with the timer functions to know more on JS
// Asynchronous functionalities
// https://nodejs.org/api/globals.html

var waitTime= 3000;     // 3 seconds long
var currentTime=0;
var waitInterval=500;
var percentWait=0;


console.log("wait for some time: ")

// we will display the function in percentage
function writeWaitPercentage(percent){
    process.stdout.clearLine();     // this will clear the last Line in the terminal
    process.stdout.cursorTo(0);     // this move the object to beginning of the Line
    process.stdout.write(`Percentage ${percent}`);
}


// this is going to be our delay or wait time function
setTimeout(function (){
    clearInterval(timeinterval);
    writeWaitPercentage(100);                                       // here is the magic of mathematics begins
    console.log("\n");              // added a new line charactor
    console.log("Done waiting")     // Invoke after Event Time
    clearInterval(timeinterval);    // this stop the interval
}, waitTime);

// Setting an interval between executions
// notice here this code will run forever because it has no stop timings
// what i am going to follow is to implement a variable which can stop during 3 seconds
var timeinterval = setInterval(function (){
    currentTime+= waitInterval;
    percentWait=Math.floor((currentTime/waitTime)*100);             // this is calculating the time  
    console.log(`Our Current Time is ${currentTime}`);              // this is not in seconds
    console.log(`Our Current Time in seconds  ${currentTime/1000}`);     // this is our current Time
    writeWaitPercentage(percentWait);                                    // this will do the job again
    console.log("% \n");                                                  // this is a newline charactor Peep
}, waitInterval);                                                   // be careful this should be the wait interval ! waitime

process.stdout.write("\n\n\n");         // this uses the new line functions
writeWaitPercentage(percentWait)        // this converts to percentage

