// question 1: Write a JavaScript function that returns array elements larger than a number

let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;
function getElement(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i]);
        }
    }
}
getElement(arr, num);


// question 2: Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”


function getUnique(str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        if (ans.indexOf(currChar) == -1) {
            ans += currChar;
        }
    }
    console.log(ans);
}

let str = "abcdabcdefgggh";
getUnique(str);


// question 3: Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
// Example: country = ["Australia", "Germany", "United States of America"]
// output: "United States of America"

function largestEle(arr) {
    let ansIdx = 0;
    for (let i = 0; i < arr.length; i++) {
        let largest = arr[ansIdx].length;
        if (arr[i].length > largest) {
            ansIdx = i;
        }
    }
    console.log(arr[ansIdx]);
}

country = ["Australia", "Germany", "United States of America"];
largestEle(country);


// question 4: Write a JavaScript function to count the number of vowels in a String argument.

let stri = "apnacollege";

function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "a" ||
            str[i] == "e" ||
            str[i] == "i" ||
            str[i] == "o" ||
            str[i] == "u"
        ) {
            count++;
        }
    }
    console.log(count);
}

countVowels(stri);


// question 5: Write a JavaScript function to generate a random number within a range(start,end)

function rangeGenerator(start, end) {
    let diff = end - start;
    console.log(Math.floor(Math.random() * (diff+1)) + start);
}
rangeGenerator(3, 5);