// question 1: Write a JS program to delete all occurrences of element ‘num’ in a given array. 
// Example: if arr=[1,2,3,4,5,6,2,3] & num=2 Result should be arr=[1,3,4,5,6,3]

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
        arr.splice(i, 1);
    }
}
console.log(arr);


// question 2: Write a JS program to find the no of digits in a number. 
// Example: if number=287152, count=6

let number = 287152;

function count(number) {
    let count = 0;
    let num = number;
    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }
    console.log(count);
}
count(number);


// question 3: Write a JS program to find the sum of digits in a number. 
// Example: if number=287152, sum=25

function sumOfDigits(number) {
    let num = number;
    let sum = 0;
    while (num > 0) {
        sum = sum + Math.floor(num % 10);
        num = Math.floor(num / 10);
    }
    console.log(sum);
}
sumOfDigits(number);


// question 4: Print the factorial of a number n.
// [Factorial of a number n is the product of all positive integers less than or equal to a given positive integer and denoted by that integer.]
// Example: 
//          7!(factorialof7) = 1x2x3x4x5x6x7 = 5040 
//          5!(factorialof5) = 1x2x3x4x5 = 120 
//          3!(factorialof3) = 1x2x3=6 
//          0! Is always 1

function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    console.log(fact);
}
factorial(5);

function fact(n) {
    if (n == 1) {
        return 1;
    }
    return n * fact(n - 1);

}
console.log(fact(7));



// question 5: Find the largest number in an array with only positive numbers.

let numbers = [2, 5, 10, 4, 2, 7, 12, 1, 9];

function findLargestNum(numbers) {
    let largest = 0;
    for (num of numbers) {
        if (num > largest) {
            largest = num;
        }
    }
    console.log(largest);
}
findLargestNum(numbers);