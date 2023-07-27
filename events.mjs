



import {EventEmitter } from 'events'

const myEmitter = new EventEmitter();

myEmitter.on('timeout', () => {
    console.log('Timeout event');
});

//myEmitter.emit('timeout');

setTimeout(() => {
    myEmitter.emit('timeout');
}, 2000);

setTimeout(() => {
    myEmitter.emit('timeout');
}, 4000);