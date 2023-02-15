"use strict";

/* ########################################################################## */
(() => {
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

// TEACHER EXAMPLE:
//Wants students to focus on a function returning something rather than
// outputting an alert or message

// function analyzeColor(color) {
//     if (color === "blue") {
//         return "blue is the color of the sky.";
//     } else if (color === "red") {
//         return "Strawberries are red.";
//     } else {
//         return `I don't know anything about ${color}.`;
//     }
//     return "message";
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

    // TEACHER EXAMPLE: Two Steps
// let message = analyzeColor(randomColor);
// console.log(message);
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

// TEACHER EXAMPLE:
// function analyzeColor(color) {
//     switch (color) {
//         case `red`:
//             return "Roses are red";
//         case `yellow`:
//             return "The sun is a yellow star";
//         case 'blue':
//             return "The sky is sometimes blue";
//         default:
//             return "I don't even know " + color;
//
//     }
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
// console.log(analyzeColor.toLowerCase())

// TEACHER EXAMPLE:

// const userColor = prompt(`Please enter a color`);
// console.log(analyzeColor(userColor.toLowerCase()));

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

// TEACHER EXAMPLE:

// function calculateTotal(luckyNumber, totalAmount) {
//     if (luckyNumber === 0){
//         return totalAmount;
//     } else if (luckyNumber === 1){
//         return totalAmount * .9;
//     } else if (luckyNumber === 2) {
//         return totalAmount * .75;
//     } else if (luckyNumber === 3) {
//         return totalAmount * 0.65;
//     } else if (luckyNumber === 4) {
//         return totalAmount * .5;
//     } else if (luckyNumber === 5) {
//         return 0
//     }
// }

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// const luckyNumber = Math.floor(Math.random() * 6);

// const calculateTotal = (number) => {
//     let luckyNumber = Math.floor(Math.random() * 6)
//     let totalAmount = parseFloat(prompt`What is the total amount of the bill?`)
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

// TEACHER EXAMPLE:

// const luckyNumber = Math.floor(Math.random() * 6);
// const totalBill = parseFloat(prompt(`Enter your total bill here:`))
// alert(`Your lucky number was ${luckyNumber}`);
// alert(`Your price before discount was ${totalBill}`);
// alert(`Your price after discount is ${calculateTotal(luckyNumber,totalBill)}`)

// function toLocaleString(number,country,language,currency) {
//     return parseFloat(number.toLocaleString(`${language}-${country}`, {style: `currency`, currency:`${currency}`}))
//     }

        // Function to Format Currency
// const formatToLocaleString = (number, language, country, currency) => {
//     return parseFloat(number).toLocaleString(`${language}-${country}`, {
//         style: "currency",
//         currency: currency
//     });
// };
//
// console.log(formatAsCurrency(500,'en','US',`USD`))

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

// const confirmIt = (number) => {
//     let displayMessage = confirm`Would you like to input a number?`
//     let inputNumber = prompt(`Input Number`, [Hello])
//     alert
//     alert
//     alert
//     return inputNumber
// }
// console.log(confirmIt())

// TEACHER EXAMPLE:

// const wantsToEnterNumber = confirm("Would you like to enter a number?");
// if (wantsToEnterNumber){
//     const userNumber = parseFloat(prompt("Enter a number: "));
//     if(isNumericAndNotNaN(userNumber)) {
//         if (userNumber % 2 === 0) {
//             alert("That number is even!");
//         } else {
//             alert("That number is odd!");
//         }
//         alert(`That number plus 100 is ` + (userNumber + 100));
//         if (userNumber < 0) {
//             alert("That number is negative!");
//         } else if (userNumber > 0) {
//             alert("That number is positive!")
//         } else {
//             alert("That number is neither positive nor negative.")
//         }
//     } else {
//         alert(`Your input is of incorrect data type.`)
//     }
// }
function getNumber(){
    const wantsToEnterNumber = confirm("Would you like to enter a number?");
    if (wantsToEnterNumber) {
        return parseFloat(prompt("Enter a number: "));
    }
    return false
}

//### IF / ELSE IF / ELSE
//
// #### Create a function called `getToDestination` which will help determine how a person can get to their destination!
//
// It will accept 4 arguments and the parameter names are:
//
// - age - the age of the rider
// - isInsured - a boolean telling the function if the rider has insurance
// - hasCar - a boolean describing if the rider has a car
// - canGetRideshare - boolean describing if the rider can get a ride share (Uber, etc)
// ---
// 1. If the rider is over 16, has insurance, and has a car then they can use their own vehicle
// 2. If the rider is not over 16, has no insurance, OR has no car but they CAN get a rideshare, then they call up a rideshare service
// 3. If the rider meets none of the above, they should call a friend for a ride!
//
// This `getToDestination` should not return any value, but rather console log based on the conditions met.
//
// ---

// const getToDestination = () => {
//     let riderAge = 15
//     let isInsured = false
//     let hasCar = false
//     let canGetRideShare = true
//     if (riderAge>=17 && isInsured==true && hasCar==true) {
//         return`You can use your vehicle to get to your destination!`
//     } else if (riderAge<=16 && isInsured == false && hasCar == false) {
//         return`Please call a friend or relative to get to your destination.`
//     } else if (riderAge<=16 || isInsured == false || hasCar == false) {
//         return`You are able to call a RideShare!`
//     } else {
//         alert
//     }
// }
// console.log(getToDestination())

// ---
// #### getToDestination, part 2
//
// - Create a function called canGetRideshare() which will *RETURN* a boolean
// - It will determine if there are drivers nearby and the person has enough money for the ride
// - Now, when you call getToDestination(), instead of passing in a canGetRideShare parameter
// - Call canGetRideshare() in the else if *after* !isLegalDriver &&...
// - Be sure to log to the user if they can or cannot get a rideshare
//
// BONUS -> This exercise will probably get the mind wondering "How can I make this more?.."
// - Consider this: What if mileage determined:
// - If the rider has enough funds?
// - If there is a driver close enough to service the rider?
//
// ---
// ### SWITCH STATEMENTS

const getToDestination = () => {
    let riderAge = 15
    let isInsured = false
    let hasCar = false
    let canGetRideShare = true
    if (riderAge>=17 && isInsured==true && hasCar==true) {
        return`You can use your vehicle to get to your destination!`
    } else if (riderAge<=16 && isInsured == false && hasCar == false) {
        return`Please call a friend or relative to get to your destination.`
    } else if (canGetRideShare == true && riderAge<=16 || isInsured == false || hasCar == false) {
        return`You are able to call a RideShare!`
    } else {
        alert
    }
}
const canGetRideShare = () => {
    let driverNearby = true
    let notBroke = true
    if (driverNearby === true && notBroke === true) {
        return `You have the funds for a RideShare, and there is a RideShare nearby!`;
    } else if (driverNearby === true && notBroke === false) {
        return `You do not have enough funds for a RideShare.`;
    } else if (driverNearby === false && notBroke === true) {
        return `You will be notified when a RideShare is nearby`;
    } else if (driverNearby === false && notBroke === false) {
        return (`You do not have the available funds, and there are no RideShare nearby.`)
    }
    return boolean
    }




// ---
// Let's make an application which helps a user input *validated* specs on a vehicle they are trying to sell:
//  - This will involve multiple switch statements and functions
//      - Orchestrate the statements in a central function that is responsible for calling and checking for errors
//      each switch statement should be wrapped in a function which accepts the user's input as a string parameter and return that same string if it is validated
//      ie: `function getBodyStyle(input){return input}`
//
//
//  - For user input, either use the browser's prompt/confirm/alert methods or mock up user input by hard-coding values
//
//
//  - The user should be able to enter their
//      - Body style (2D, 4D, etc)
//      - Vehicle type (sports car, sedan, compact, truck, etc)
//      - Vehicle color
//
//
//  - Each switch statement should confirm the user's choice in a logging statement
//
//
//  - The point of this is to validate what the user enters.
//    - If they do not enter an acceptable input, the DEFAULT statement will handle this as an error
//        ie: default: `"error: " + vehicleType + " not recognized"`;
//    - If this occurs, call the related function again (see: recursion) until the user enters a correct choice
//    - HINT: a way you can check for errors is to see if the string contains the word "error"
//
//
//  - After all switch statement functions successfully return the user's input, concatenate them all into a nicely-formatted string and return all data to the user
})()