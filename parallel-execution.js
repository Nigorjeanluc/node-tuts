var fs = require('fs');
var { promisify } = require('util');
var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);
var readdir = promisify(fs.readdir);
var beep = () => process.stdout.write("\x07");

var delay = (seconds) => new Promise((resolves) => {
    setTimeout(resolves, seconds*1000);
})

// Promise.all([
//     writeFile('readme.md', 'Hello World'),
//     writeFile('readme.txt', 'Hello World'),
//     writeFile('readme.json', '{ "Hello World" }'),

// ]).then(() => readdir(__dirname)).then(console.log);

Promise.all([
    delay(5),
    delay(2),
    delay(3),
    delay(5),

]).then(() => readdir(__dirname)).then(console.log);