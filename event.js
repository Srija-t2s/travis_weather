const fs = require('fs');

const setTimeOutLogger = () => {
    console.log('setTimeout Logger');
}

const setImmediateLogger = () => {
    console.log('setImmediate Logger')
}

//For timeout
setTimeout(setTimeOutLogger,1000);

//File I/O operation
fs.readFile('check.txt','utf-8',(data) => {
    console.log("Reading data 1");
});

fs.readFile('check.txt','utf-8',(data) => {
    console.log("Reading data 2");
});

fs.readFile('check.txt','utf-8',(data) => {
    console.log("Reading data 3");
});

fs.readFile('check.txt','utf-8',(data) => {
    console.log("Reading data 4");
});

fs.readFile('check.txt','utf-8',(data) => {
    console.log("Reading data 5");
});

//For setImmediate
setImmediate(setImmediateLogger);
setImmediate(setImmediateLogger);
setImmediate(setImmediateLogger);