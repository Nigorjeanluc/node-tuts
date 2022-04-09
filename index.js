// Example One
// function hideString(str, done) {
//     // the process will be invoked on the next loop
//     process.nextTick(() => {
//         done(str.replace(/[a-zA-Z]/g, 'X'));
//     });
// }

// hideString("Hello World", (hidden) => {
//     console.log( hidden );
// });

// console.log( 'end' );

// more examples

// Example Two

function delay(seconds, callback) {
    setTimeout(callback, seconds*1000)
}

console.log('starting delays');
delay(2, () => {
    console.log('two seconds');
    delay(1, () => {
        console.log('three seconds');
        delay(1, () => {
            console.log('four seconds');
        })
    })
})