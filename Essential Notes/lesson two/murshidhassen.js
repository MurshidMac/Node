// SO here I'll be discussing about the Event Emitter Object in the NodeJS
// for More Infor Visit https://nodejs.org/api/events.html
// One More Important this is that EventEmitter Uses a the Design Pattern Pub/Sub 
// Pub Sub Means Publish and Subscribe Design Pattern Which used In Message Oriented Middlewares

var event = require('events');              // event Module being called as an object
var emitter = new event.EventEmitter();     // Event Emitter is a Constructor and it needs to be called as an object
                                            // Instance of the event Emitter is created above

var name= "murshidhassen";
var statusCode= 200;
// this is an emitter event     
// this is an asynchronous callback function
emitter.on('customEvent', function (message, status){
    console.log(`${message} and ${status}`);    //  this gives us the message and the status code for the function
});                                 // this is listner event where we can wire up the event in here

// here I am calling back the emitter event in here
emitter.emit('customEvent', "Murshid Hassen", 200);                     // this will fire up our custom event 

// Lets Modifiy the Emit function further
// here what we should understand is that the modified emit() funtion will always emits for the parameters passed 
// wether its a function or not it will be emitting the same
/*
emitter.emit('customEvent', function (){
    return name;
}, function (){
    return statusCode;
});
*/
// Lets further see some inheritance of feature with the emitter Constructor
// SO to do some pure building of the products
var EventEmitter= require('events').EventEmitter;   // we are calling the event constructor straigt from the EventEmitter class
var util = require('util');                         // this is for inheritance purpose
// here comes an handy feature to code
// Person Object 
var Person= function (name){
    this.name=name;
}



