/*
function sayHello(name) {
    console.log('Hello ' + name);
}
sayHello('Sehr');*/
/*
console.log(); //global
setTimeout();
clearTimeout();
setInterval(); 

//var message = ''; //instead of window there is global

//console.log(module); //not a global object 


const log = require('./logger');
log('message');
*/

const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory: ' + totalMemory);

//template string
//ES6 / ES2015 : ECMAScript 6

console.log(`Free Memory: ${freeMemory}`);
console.log(`Total Memory: ${totalMemory}`);