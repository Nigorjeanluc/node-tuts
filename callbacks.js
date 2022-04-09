// Example Four

var fs = require('fs');

// turn callbacks into promises
var { promisify } = require('util');

// var delay = (seconds, callback) => {
//     if (seconds > 3) {
//         callback(new Error(`${seconds} seconds it's too long!`));
//     } else {
//         setTimeout(() =>
//             callback(null, `the ${seconds} second delay is over.`),
//             seconds
//         );
//     }
// }

// Before promisify

// delay(4, (error, message) => {
//     if (error) {
//         console.log(error.message);
//     } else {
//         console.log(message);
//     }
// })

// With promisify

// var promiseDelay = promisify(delay);

// promiseDelay(5)
//     .then(console.log)
//     .catch((error) => console.log(`error: ${error.message}`));

// using File System as a callback to promisify

var writeFile = promisify(fs.writeFile);

writeFile('sample.txt', 'This is a sample')
    .then(() => console.log('file successfully created'))
    .catch((error) => console.log('error creating file'));