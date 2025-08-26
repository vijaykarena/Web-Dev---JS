const max = prompt("Select the range")

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess your number");

while (true) {
    if (guess == "quit") {
        console.log("you exit!");
        break;
    } else if (guess == random) {
        console.log("congrats! you guess correct number!", random);
        break;
    } else if (guess > random) {
        guess = prompt("your number is too big, guess again");
    } else {
        guess = prompt("your number is too small, guess again");
    }
}