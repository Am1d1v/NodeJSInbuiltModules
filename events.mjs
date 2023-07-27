



import {EventEmitter } from 'events'

const myEmitter = new EventEmitter();

const timeoutListenerFN = (secondsQuantity) => {
    console.log(`Timeout event in ${secondsQuantity} seconds`);
};

myEmitter.on('timeout', timeoutListenerFN);

//myEmitter.emit('timeout');

setTimeout(() => {
    myEmitter.emit('timeout', 2);
}, 2000);

setTimeout(() => {
    myEmitter.emit('timeout', 4);
}, 4000);

myEmitter.once('singleEvent', () => {
    console.log('Single Event');
});



setTimeout(() => {
    myEmitter.emit('singleEvent');
}, 2000);

setTimeout(() => {
    myEmitter.emit('singleEvent');
}, 4000);


setTimeout(() => {
    myEmitter.off('timeout', timeoutListenerFN);
}, 3000);

