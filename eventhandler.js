var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {     // create Event handler 'myEventHandler' Logic or action
  console.log('I hear a Ajay!');
}
//Assign the event handler to an event:          // Create Event Name 'myEvent'
eventEmitter.on('myEvent', myEventHandler);
//Fire the 'scream' event:         // Call Event Name 'myEvent' using emit Function
eventEmitter.emit('myEvent');


function myNewHandler () { console.log("Hi Its my New Event Handler");}
eventEmitter.on('e',myNewHandler);
eventEmitter.emit('e');
