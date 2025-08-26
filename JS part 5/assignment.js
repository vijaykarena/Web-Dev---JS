// question 1: create Dice than generate 0 to 6 numbers 

const dice_number = Math.floor(Math.random() * 6) + 1;
console.log(dice_number);


// question 2: Create an object representing a car that stores the following properties for the car: name, model, color.
// Print the car’s name.

const car = {
    name: "Supra",
    model: "MK4",
    Color: "Black"
}
console.log(car.name, car["model"]);


// question 3: Create an object Person with their name, age and city.
// Edit their city’s original value to change it to “NewYork”.
// Add a new property country and set it to the United States.

const Person = {
    name: "jhon",
    age: "25",
    city: "delhi"
}

Person["city"] = "mumbai";
Person.country = "NewYork";

console.log(Person);
