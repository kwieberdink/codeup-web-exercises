"use strict"

let fruits = ["bananas","apples","oranges","mangoes","tomatoes"];

// You can call for one item in the list through:
// Position of each item in the list starts with 0 (`zero`)
let var1 = fruits[2]
console.log(var1)

// You can find the amount of items in an array through array.length:
let numberOfFruits = fruits.length
console.log(`The number of fruits => `, numberOfFruits);

// array.toStrings() will lists out each item in the array as a string
let fruitsString = fruits.toString();
console.log(`Using toString() on fruits => `,fruitsString);

// You can have any data type within an array
let fruitsAndNumbers = ["bananas", 2, "apples",8675309, undefined, null, NaN];
console.log(fruitsAndNumbers);

//
const returnString = (input) => {
    return input;
}

// You can have the outputs of functions, as data types as well
let stringsList = [returnString("Jason"),returnString("Javier"),returnString("Kaeden")];
console.log(`stringsList follows => `, stringsList);