// question 1: Square and sum the array elements using the arrow function and then find the average of the array.

let squerAvg = (arr) => {
    let square = arr.map(e => e * e);
    let sum = square.reduce((sum, e) => sum + e);
    return sum / arr.length;
}
let ans = squerAvg([2, 3, 4, 5]);
console.log(ans);




// question 2: Create a new array using the map function whose each element is equal to the original element plus 5.

let newArr = [2, 3, 4, 5].map(e => e + 5);
console.log(newArr);




// queston 3: Create a new array whose elements are in uppercase of words present in the origin alarray

let newArray2 = ['adam', 'bob', 'catlyn', 'donald', 'eve'].map(e => e.toUpperCase());
console.log(newArray2);




// question 4: Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.
// The function should return a new array with the original array values and all of the additional arguments doubled.

let doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(e => e * 2)];

let ans2 = doubleAndReturnArgs([2, 3, 4, 5], 2, 3, 4, 5);
console.log(ans2);




// question 5: Write a function called mergeObjects that accepts two objects and returns a new object which contains 
// all the keys and values of the first object and second object.
const obj1 = { name: "vijay", age: 23 };
const obj2 = { school: "k&mp", rno: 20 };
let mergeObjects = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
}
console.log(mergeObjects(obj1, obj2));

