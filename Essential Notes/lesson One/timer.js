// we will be working with the timer functions to know more on JS
// Asynchronous functionalities
// https://nodejs.org/api/globals.html

var waitTime= 3000;     // 3 seconds long
var currentTime=0;
var waitInterval=500;



console.log("wait for some time: ")



// this is going to be our delay or wait time function
setTimeout(function (){
    clearInterval(timeinterval);
    console.log("Done waiting")     // Invoke after Event Time
    clearInterval(timeinterval);    // this stop the interval
}, waitTime);

// Setting an interval between executions
// notice here this code will run forever because it has no stop timings
// what i am going to follow is to implement a variable which can stop during 3 seconds
var timeinterval = setInterval(function (){
    currentTime+= waitInterval;
    console.log(`Our Current Time is ${currentTime}`);              // this is not in seconds
    console.log(`Our Current Time in seconds  ${currentTime/1000}`);     // this is our current Time
}, waitInterval);                                                   // be careful this should be the wait interval ! waitime



