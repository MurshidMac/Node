// we will be working with the timer functions to know more on JS
// Asynchronous functionalities
// https://nodejs.org/api/globals.html

var waitTime= 3000;     // 3 seconds long
var currentTime=0;
var waitInterval=500;



console.log("wait for some time: ")

// this is going to be our delay or wait time function
setTimeout(function (){
    console.log("Done waiting")     // Invoke after Event Time
}, waitTime);

// Setting an interval between executions
setInterval(function (){
    currentTime= currentTime+waitInterval;
    console.log(`Our Current Time is ${currentTime}`);              // this is not in seconds
    console.log(`Our Current Time in seconds  ${currentTime/1000}`);     // this is our current Time
}, waitTime);


