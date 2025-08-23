// question 1: Write a JavaScript program to get the first n elements of an array. [n can be any positive number]. 
// For example: for array[7,9,0,-2] and n=3 Print,[7,9,0]

function questionOne(arr, n) {
    let ans = arr.slice(0, n);
    console.log(ans);
}

let arr = [7, 9, 0, -2];
let n = 3;
questionOne(arr, n);


// question 2 : Write a JavaScript program to get the last n elements of an array. [n can be any positive number].
// For example: for array[7,9,0,-2] and n=3 Print,[9,0,-2]

function questionTwo(arr, n) {
    let ans = arr.slice(arr.length - n);
    console.log(ans);
}
questionTwo(arr, n);


// question 3: Write a JavaScript program to check whether a string is blank or not.

function questionThree(str) {
    // if (str) {
    if (str.length != 0) {
        console.log("string is not empty");
    } else {
        console.log("string is empty");
    }
}
let str = "";
questionThree(str);


// question 4: Write a JavaScript program to test whether the character at the given (character) index is lowercase.
function questionFour(str, idx) {
    if (str[idx] == str[idx].toLowerCase()) {
        console.log("character is lowercase");
    } else {
        console.log("character is not lowercase");
    }
}
questionFour("apNaCollege", 2);


// question 5: Write a JavaScript program to check if an element exists in an array or not.
function questionFive(arr, ele) {
    if (arr.indexOf(ele) != -1) {
        console.log("element exist in array");
    } else {
        console.log("element not exist in array");
    }
}
questionFive([1, 2, 3], 3);