// SO here I'll be discussing about the Event Emitter Object in the NodeJS
// for More Infor Visit https://nodejs.org/api/events.html
// One More Important this is that EventEmitter Uses a the Design Pattern Pub/Sub 
// Pub Sub Means Publish and Subscribe Design Pattern Which used In Message Oriented Middlewares
// Description Uses Util.inherits() for inheritance purposes

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
var Person= require("./lib/personmodule");

// this is one person object from the constructor Person
var murshidhassen= new Person("Murshid Hassen");      // I am creating an object of the person 
murshidhassen.on('speak', function (said){            // This is a custom event for ben
    console.log(`${this.name} said ${said}`);                                  
});
// this is asynchronous call back function and the tool 
murshidhassen.emit('speak', "HI This is Murshid Implementing Node");    // this is a emit

// there can be some one else as well
var musthaque= new Person("Musthaq");
musthaque.on('speak', function (saids){
    console.log(`My brother is ${this.name} and he says ${saids}`);
});
musthaque.emit('speak', "I have two brother and a sister");

