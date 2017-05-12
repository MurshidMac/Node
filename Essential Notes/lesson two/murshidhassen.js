// SO here I'll be discussing about the Event Emitter Object in the NodeJS
// for More Infor Visit https://nodejs.org/api/events.html
// One More Important this is that EventEmitter Uses a the Design Pattern Pub/Sub 
// Pub Sub Means Publish and Subscribe Design Pattern Which used In Message Oriented Middlewares

var event = require('events');  // event Module being called as an object
var emiiter = new event.EventEmitter();     // Event Emitter is a Constructor and it needs to be called as an object

