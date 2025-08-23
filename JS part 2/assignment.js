// Question 1: Create a number variable num with some value. 
// Now, print “good” if the number is divisible by 10 and print “bad” if it is not.

let num = 1000009;

if (num % 10 === 0) {
    console.log("good");
} else {
    console.log("bad");
}

// Question 2

// let name = prompt("enter your name");
// let age = prompt("enter your age");
// alert(`${name} is ${age} years old!`); 


// Question 3

let quarter = 1;

switch (quarter) {
    case 1:
        console.log("january, february, march");
        break;
    case 2:
        console.log("april, may, jun");
        break;
    case 3:
        console.log("july, August, september");
        break;
    case 4:
        console.log("october, November, December");
        break;
    default: console.log("not a valid input");
}



// Question 4: A string is a golden string if it starts with the character ‘A’ or ‘a’ and has a total length greater than 5.
// For a given string print if it is golden or not.

let str = "Atomberg";
if ((str[0] === 'a' || str[0] === 'A') && str.length > 5) {
    console.log("Golden string");
} else {
    console.log("not a Golden string");
}



// Question 5: Largest of 3 number

let a = 10;
let b = 11;
let c = 5;

if (a > b) {
    if (a > c) {
        console.log(a, "is largest");
    }
} else if (b > c) {
    console.log(b, "is largest");
} else {
    console.log(c, "is largest");
}


// Question 6: Write a program to check if 2 numbers have the same last digit.
// Eg: 32 and 47852 have the same last digit i.e.2

let num1 = 323221;
let num2 = 478521;

if (Math.floor(num1 % 10) === Math.floor(num2 % 10)) {
    console.log("last digit is same");
} else {
    console.log("last digit is not same");
}


