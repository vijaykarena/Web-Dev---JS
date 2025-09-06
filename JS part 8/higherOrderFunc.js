// ******************* // 
// ***** forEach ***** //
// ******************* //

// it return undefined ( we mainly use it while we have too directly perform operation on array element)

// ex1:
const arr = [{
    name: "vijay",
    marks: 95,
}, {
    name: "ishika",
    marks: 98
}, {
    name: "mira",
    marks: 99
}]

arr.forEach((std) => {
    console.log(std.marks * 2);
});
console.log(arr);

// ex2:
let num = [1, 2, 3];
num.forEach(el => {
    console.log(el * 2);
})
console.log(num);

//----------------------------------------

// ***************** // 
// ****** Map ****** //
// ***************** //

// it return new array 

// ex1:

let nums = [1, 2, 3, 4, 5];

let double = nums.map(e => {
    return e * 2;
})
console.log(double);


//----------------------------------------

// **************** //
// *****Filter***** //
// **************** //


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let even = numbers.filter(e => {
    return e % 2 == 0;
})
console.log(even);



//----------------------------------------

// ***************** //
// ******Every****** //
// ***************** //

let res = [2, 4, 6, 8].every(el => el % 2 == 0);  // true
console.log(res);


let res2 = [2, 4, 6, 8, 1].every(el => el % 2 == 0);  // false
console.log(res2);



//----------------------------------------

// **************** //
// ******some****** //
// **************** //

let ans = [1, 2, 3].some(e => e % 2 == 0); //true
console.log(ans);

let ans2 = [1, 3, 5].some(e => e % 2 == 0); // false
console.log(ans2);



//----------------------------------------

// ****************** //
// ******reduce****** //
// ****************** //

let reduceAns = [1, 2, 3, 4].reduce((acc, e) => acc + e); // 10
console.log(reduceAns);


// practice questions

// find maximum in array using reduce method
let max = [2, 8, 5, 4, 9, 3, 6].reduce((acc, e) => Math.max(acc, e));
console.log(max);


// check if all numbers in array are multiple of 10 or not
let checked = [10, 20, 30, 40, 5].every(e => e % 10 == 0);
console.log(checked);


// create a function to find the minimum number in an array
let min = [2, 8, 5, 1, 4, 9, -2, 3, 6].reduce((min, e) => Math.min(min, e));
console.log(min);










