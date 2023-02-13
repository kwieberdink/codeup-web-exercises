"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

// const sayHello = (name) => {
//     let message = `Hello, ${name}!`;
//     return message;
// }
// let name = prompt`What is your name?`;
// console.log(alert(sayHello(name)));

// Teacher Example:
// const sayHello = (name) => {
//     let message = `Hello, ${name}!`;
//     return message;
// }

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

    // let helloMessage = sayHello("Kaeden");
    // console.log(helloMessage));

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

// Teacher Example:
// const myName ="Kaeden";
// const helloMessage = sayHello(myName);
// console.log(helloMessage)

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
// let random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

// Teacher Example:
// const isTwo = (number) => {
//     let result = number === 2;
//     return result;
// }
// let randomMessage = isTwo(random);
// console.log(`The random number is: ${random}`)
// console.log(randomMessage);

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

// Teacher Example:
// const calculateTip = (tipPercentage, billTotal) =>{
//     let tipPercentageNum = parseFloat(tipPercentage);
//     let billTotalNum = parseFloat(billTotal);
//     let amountToTip = (tipPercentageNum/100) *billTotalNum;
//     return amountToTip;
// }
//let tipAmount = calculateTip(15,100);
//console.log(`The amount you should tip is: ${tipAmount.toLocaleString(`en-US`,{style:`currency`,currency: `USD`})}.`);


/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
// Teacher Example:
// let userBill = parseFloat(prompt(`How much was your bill?`));
// let userTipPercentage = parseFloat(prompt(`What percentage would you like to tip?`))
// let tipAmount = calculateTip(userTipPercentage,userBill)
// console.log(`The amount you should tip is: ${tipAmount.toLocaleString(`en-US`,{style:`currency`,currency: `USD`})}.`)
/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
// const applyDiscount = () => {
//     let originalPrice = 100
//     let discountPercent = 0.2
//     let finalPrice = (45.99, 0.12)
//
// }

// const applyDiscount =(price, discount) => {
//     let appliedDiscount = parseFloat(price)-(parseFloat(price)*parseFloat(discount));
//     return appliedDiscount;
// }
// let discountMessage = applyDiscount("1000",".2");
// console.log(`After the applied discount, the price ${discountMessage.toLocaleString(`en-US`,{style:`currency`,currency: `USD`})}.`)

// Function Practice:
//1. Make a function called returnTwo() that returns the number 2 when called
//    Test this function with `console.log(returnTwo())`



// 2. Make a function called sayHowdy() which console.logs the string “Howdy!”
//    Test this function by directly calling `sayHowdy()`
//    Remember this function does not need a defined return value

// const sayHowdy = (string) => {
//     let message = `Howdy!`;
//     return message;
// }
// console.log(sayHowdy());

// 3. Make a function called returnName() that returns the string of your name
//    Test this function with `console.log(returnName())`

// const returnName = (name) => {
//     let message = `${name}`
//     return message
// }
// console.log(returnName(`Kaeden`));

// 4. Make a function called addThree() which takes in a number input and returns the number plus 3.
//    Test this function with `console.log(addThree(5))`

// const addThree = (number) => {
//     let message = number + 3;
//     return message;
// }
// console.log(addThree(5));

// 5. Make a function called sayString() which returns the string input passed in.
//    Test this function with `console.log(sayString('codeup'))`

// const sayString = (string) => {
//     let message = string
//     return string
// }
// console.log(sayString(`codeup`))

// - Write a function named `lowerCase(string)`

// const lowerCase = (string) => {
//     let message = (string.toLowerCase())
//     return message
// }
// console.log(lowerCase(`CODEUP`))

// - Write a function named `double(n)` that returns a number times two

// const double = (number) => {
//     let message = number * 2;
//     return message;
// }
// console.log(double(22))

// - Write a function named `triple(n)` that returns a number times 3

// const triple = (number) => {
//     let message = number * 3;
//     return message;
// }
// console.log(triple(6));

// - Write a function named `quadruple(n)` that returns a number times 4

// const quadruple =(number)=> {
//     let message = number * 4;
//     return message;
// }
// console.log(quadruple(4));

// - Write a function named `half(n)` that returns 1/2 of the provided input

// const half=(number)=> {
//     let message = number / 2
//     return message
// }
// console.log(half(3))

// - Write a function named `subtract(a, b)` that returns `a` minus `b`

// const subtract = (a, b) => {
//     let message = a - b;
//     return message;
// }
// console.log(subtract(4,2));

// - Write a function named `multiply(a, b)` that returns the product of `a` times
//   `b`

// const multiply = (a,b)=> {
//     let message = a * b;
//     return message;
// }
// console.log(multiply(3,6));

// - Write a function named divide(a, b) that returns `a` divided by ~b~

// const divide = (a,b) => {
//     let message = a / b;
//     return message;
// }
// console.log(divide(12,3));

// - Write a function named `remainder(a, b)` that returns the remainder after
//   dividing a by b

// const remainder = (a,b) => {
//     let message = a % b;
//     return message;
// }
// console.log(remainder(5,2));

// - Write a function named `cube(n)` that returns n * n * n

// const cube = (number) => {
//     let message = number * number * number;
//     return message;
// }
// console.log(cube(3));

// - Write a function named `squareRoot(n)` that returns the square root of the
//   input

// const squareRoot = (number) => {
//     let message = Math.sqrt(number);
//     return message;
// }
// console.log(squareRoot(121));

// - Write a function named `cubeRoot(n)` that returns the cube root of the input

// const cubeRoot = (number) => {
//     let message = Math.cbrt(number);
//     return message;
// }
// console.log(cubeRoot(27));