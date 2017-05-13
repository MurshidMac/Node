// this becomes a reusable component
// Lets further see some inheritance of feature with the emitter Constructor
// SO to do some pure building of the products
var EventEmitter= require('events').EventEmitter;   // we are calling the event constructor straigt from the EventEmitter class
var util = require('util');                         // this is for inheritance purpose
// here comes an handy feature to code
// Person Object 
var Person= function (name){
    this.name=name;
}
util.inherits(Person, EventEmitter);                // Prototype function that implements Inheritance

// here comes the handy part to export to the world
// Otherwise this stays as a local file
module.exports= Person;