"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// const analyzeColor = (colors) => {
//     if (colors === "blue"){
//         alert (`The ocean is blue!`);
//     } else if (colors === "green") {
//         alert (`The grass is green`);
//     } else if (colors === "red") {
//         alert (`Strawberries are red!`);
//     } else if (colors === "violet") {
//         alert (`That is my favorite color!`);
//     } else {
//         alert(`I don't know anything about that color.`);
//     }
// }
// console.log(analyzeColor(red));

// let color = prompt(`What color do you want to know about?`);
// switch (color.toLowerCase()) {
//     case "red":
//         alert (`Strawberries are red!`);
//         break;
//     case "blue":
//         alert (`The ocean is blue!`);
//         break;
//     case "green":
//         alert (`The grass is green`);
//         break;
//     case "purple":
//         alert (`That is my favorite color!`);
//         break;
//     default:
//         alert (`I don't know anything about that color.`);
// }


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// let randomColor = colors[Math.floor(Math.random() * colors.length)];
// console.log(analyzeColor(randomColor))

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

// let color = prompt(`What color do you want to know about?`);
// switch (color.toLowerCase()) {
//     case "red":
//         alert (`Strawberries are red!`);
//         break;
//     case "blue":
//         alert (`The ocean is blue!`);
//         break;
//     case "green":
//         alert (`The grass is green`);
//         break;
//     case "purple":
//         alert (`That is my favorite color!`);
//         break;
//     default:
//         alert (`I don't know anything about that color.`);
// }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// let colors = prompt(`What color do you want to know about?`);
//
// const analyzeColor = (colors) => {
//     if (colors === "blue"){
//         alert (`The ocean is blue!`);
//     } else if (colors === "green") {
//         alert (`The grass is green`);
//     } else if (colors === "red") {
//         alert (`Strawberries are red!`);
//     } else if (colors === "violet") {
//         alert (`That is my favorite color!`);
//     } else {
//         alert(`I don't know anything about that color.`);
//     }
// }
// console.log(analyzeColor)

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// const calculateTotal = (luckyNumber, totalAmount) => {
//     let discountPercent = (number) => {
//     if (luckyNumber === 0) {
//         return 0
//     } else if (luckyNumber === 1) {
//         return 10;
//     } else if (luckyNumber === 2) {
//         return 25;
//     } else if (luckyNumber === 3) {
//         return 35;
//     } else if (luckyNumber === 4) {
//         return 50;
//     } else if (luckyNumber === 5) {
//         return 100
//     } else {
//         alert(`Not a valid lucky number.`)
//     }
// }
//     let discountedPrice = totalAmount-(totalAmount * (discountPercent()/100))
//     let message = `Based on your lucky number, the discount percentage is ${discountPercent()}%, and the total cost of the bill, ${totalAmount.toLocaleString(`en-US`,{style:`currency`,currency: `USD`})}, the discounted price
//     will be ${discountedPrice.toLocaleString(`en-US`,{style:`currency`,currency: `USD`})}}.`;
//     return message;
// }
// console.log(calculateTotal(1,100))

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// let luckyNumber = Math.floor(Math.random() * 6);

// const calculateTotal = (number) => {
//     let luckyNumber = Math.floor(Math.random() * 6)
//     let totalAmount = prompt`What is the total amount of the bill?`
//     let discountPercent = (number) => {
//     if (luckyNumber === 0) {
//         return 0
//     } else if (luckyNumber === 1) {
//         return 10;
//     } else if (luckyNumber === 2) {
//         return 25;
//     } else if (luckyNumber === 3) {
//         return 35;
//     } else if (luckyNumber === 4) {
//         return 50;
//     } else if (luckyNumber === 5) {
//         return 100
//     } else {
//         alert(`Not a valid lucky number.`)
//     }
// }
//     let discountedPrice = totalAmount-(totalAmount * (discountPercent()/100))
//     let message = `Your lucky number is ${luckyNumber}, the discount percentage is ${discountPercent()}%, and the total cost of the bill is ${totalAmount.toLocaleString(`en-US`,{style:`currency`,currency: `USD`})}. The bill with the discounted price
//     will be ${discountedPrice.toLocaleString(`en-US`,{style:`currency`,currency: `USD`})}.`;
//     return message;
// }
// console.log(calculateTotal())

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

const confirmIt = (number) => {
}