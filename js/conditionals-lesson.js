"use strict";

// let flavor = prompt(`Welcome to Codeup Ice Cream!
// What flavor do you want?`);

// if (flavor === "chocolate") {
//     alert(`One chocolate coming right up!`);
// } else if(flavor==="vanilla") {
//     alert(`One vanilla coming right up!`)
// } else {
//     alert(`We don't have that flavor, sorry :(`)
// }

// switch(flavor.toLowerCase()) {
//     case"chocolate":// Parenthesis are not required, but they do work;
//         alert("One chocolate coming right up!");
//         break;
//     case "vanilla":
//         alert("One vanilla coming right up!");
//         break;
//     case "strawberry":
//         alert("One strawberry coming right up!")
//         break;
//     default:
//         alert("We don't have that flavor, sorry");
// }
//Without the break statement, not only will it give you the alert
//for the one you want, but it will give you every alert

// function serveIceCream(flavor) {
//     if (flavor === "chocolate"
//     || flavor === "vanillas"
//     || flavor === "strawberry"){
//         alert(`One ${flavor} coming right up!`);
//     }else{
//         alert("We don't have that flavor, sorry!");
//     }
// }
// serveIceCream(prompt(`Welcome to Codeup Ice Cream!
// What flavor do you want?`).toLowerCase());

// function divisibleByFive(number) {
//     if(number % 5 === 0){
//         console.log("Divisible by 5!");
//     } else {
//         console.log("Not divisible by 5!");
//     }
// }

// const divisibleByFiveTernary = number => {
//     number % 5 === 0 ?  console.log("Divisible by 5!"):
//         console.log("Not divisible by 5!");
// } // When you have only one parameter, you dont need parenthesis
//
// const divisible = (dividend, divisor) => {
//     dividend % divisor === 0 ? console.log(`Divisible by ${divisor}!`):
//         console.log(`Not divisible by ${divisor}`);
// }

// const divisible = (dividend, divisor) => {
//     return dividend % divisor === 0 ? `Divisible by ${divisor}!`
//         : `Not divisible by ${divisor}!`;
// }

// function divisible (dividend,divisor) {
//     if (dividend % divisor === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
