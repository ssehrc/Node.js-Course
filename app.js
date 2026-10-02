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

const path = require('path');
var pathObj = path.parse(__filename);

console.log(pathObj);