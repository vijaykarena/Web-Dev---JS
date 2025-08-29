// *********************************
// ***** Higher Order Function ***** 
// *********************************

// -> it takes one or multiple function as an argument
// -> OR
// -> it returns a function

// ______________________________________________________________________

// (1) takes one or multiple function as an argument

function greet() {
    console.log("hello");
}

function multipleGreet(func, count) {
    for (let i = 1; i <= count; i++) {
        func();
    }
}

multipleGreet(greet, 5);



// ______________________________________________________________________

// (2) returns a function

function oddOrEvenFactory(request) {
    if (request == "odd") {
        return function (n) {
            console.log(n % 2 != 0);
        }
    } else if (request == "even") {
        return function (n) {
            console.log(n % 2 == 0);
        }
    } else {
        console.log("wrong request");
    }
}

// let request = "odd";
let func = oddOrEvenFactory("even");

func(7); // <- this function behave as per our request 