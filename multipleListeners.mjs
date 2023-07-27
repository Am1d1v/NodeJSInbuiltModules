import {EventEmitter} from 'events'


const myEmitter = new EventEmitter();

myEmitter.on('myEvent', () => {
    console.log('First Event Listener');
});

myEmitter.on('myEvent', () => {
    console.log('Second Event Listener');
});

console.log(myEmitter.getMaxListeners());
myEmitter.setMaxListeners(20);
console.log(myEmitter.getMaxListeners());
console.log(myEmitter.eventNames());

setTimeout(() => {
    myEmitter.emit('myEvent');
}, 1000);
