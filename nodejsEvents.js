const  EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
//waterFull bhanne event fire garne
//waterfull bhanne event fire bhayesi balla run hunxa and console ko output auxa
myEmitter.on('WaterFull', () => {
  console.log('Please turn off the motor');
  setTimeout(()=>{
    console.log('Please turn off the motor iIts a gentle reminder');
    //3000 second paxi chai please turn off the motor bhanne action perform garne
  }, 3000)
});
console.log('The script is running');
//Event fire gareko to print the result
myEmitter.emit('WaterFull');
console.log('The script is still running');

