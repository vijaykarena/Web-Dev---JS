//Practice q1: Write a program that print 5 times "hello world" at interval of 2s each

let id = setInterval(() => {
    console.log("Hello World");
}, 2000);

setTimeout(() => {
    clearInterval(id)
}, 10000);


// question 1: Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.

let arrayAverage = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return Math.floor(sum / arr.length);
}
let avg = arrayAverage([3, 5, 7, 9])
console.log(avg);


// question 2: Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.

let isEven = num => num % 2 == 0;
let checkEven = isEven(4);
console.log(checkEven);


// question 3: What is the output of the following code

const obj = {
    message: "hello world",
    logMessage() {
        console.log(this.message);
    }
};
setTimeout(obj.logMessage, 1000);
// answer: after a delay of 1 second, undefined is logged to the console.
// While the setTimeout() function uses the obj.logMessage as a callback, still, it invokes obj.logMessage as a regular function, 
// rather than a method. And during a regular function invocation this equals the global object, which is a window in the case of the browser environment.
// That's why console.log(this.message) inside logMessage method logs window.message, which is undefined.




// question 4: What is the output of the following code

let length = 4;
function callback() {
    console.log(this.length);
}
const object = {
    length: 5,
    method(callback) {
        callback();
    }
};
object.method(callback, 1, 2);

// answer : 0 
// object.method receives callback and then calls it like callback()fn.
// Important: It’s called as a normal function, not as a method of an object.
// due to normal function call, this refers to global object, and in Node.js, global.length is undefined.
// In browsers, window.length = number of frames (usually 0).
// So:
// If run in browser, window.length is usually 0.
// If run in Node.js, it's undefined.

