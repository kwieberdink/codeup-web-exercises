"use strict";

// TRADITIONAL METHOD:
// Can call the function at any point in the document such as the bottom
// Even with calling the function at the top
// You can hover over the function and hold command to go to the original function
// function helloWorld(){
//     alert(`Hello, World!`)
// }
// helloWorld()

// the arrow function
//
// const helloWorld = (name) => {
//     alert(`Hello, ${name}!`);
// }
//
// const helloWorld = (name) => {
//     let message = `Hello ${name}!`
//     return message;
// }
// let firstHello= helloWorld(`Kaeden`);
// console.log(firstHello);
// let secondHello = helloWorld(`Javier`);
// alert secondHello
// helloWorld("Kaeden")

// const parseDiscordName = (name) =>[
//     let guildCharEnd = name.indexOf(`]`) + 1:
//     let guildName = name.substring(0,guildCharEnd);
//     let userName = name.substring(guildCharEnd;)
//     let message = `The user's name is ${userNam}. And they are a member of the ${guildName} guild.`;
//     let nameArray = [guildName, userName];
//     return nameArray
// ]
// let discordName = parseDiscordName("[YoLoBlob]Jason");
// console.log(discordName)
//
// let discordName2 = parseDiscordName("[GAMER]Billy");

// If you notice you do the same function over and over again. Create your own function.
// Saves more time instead of having to type it out,
// Also if you have to go back and edit, then you only have to do it once

// In order to access variables within the bracket, you must
// declare the variable globally beforehand
// Ex.

// let message;
// const highFive = (name1, name2) => {
//     let message = `${name1} gives ${name2} a high five!`;
//     return message;//return essentially exits the function, anything after would not process
//     console.log(`YOU WILL NEVER SEE THIS!!`); // EX. of above statement
// }
//
// let names1 = highFive("Jason","Javier")
// console.log(names1)

// Below is a shortened version of the above statement
// Both functions do the same job
// If you use squigglies, then you have to put return before the function
// const highFive = (name1, name2) => `${name1} gives ${name2} a high five!`;
//
// let names1 = highFive("Jason","Javier")
// console.log(names1)

// create an arrow function isEven(num) that takes an integer as an argument
// it returns true if the integer is even and false if not

const isEven = (num) => {
    let result = num % 2 === 0;
    return result
} // Use this function to determine if its even or not

let student = 24
let evenStudents = isEven(students);

// Look into github co-pilot
// understand the difference between parameter and argument

// IIFE: (Immediately-Invoked Function Expression) arrow function
// Important to protect your code
// Use as a standard
// Use under "use strict"
(() => {
    //anything placed inside of here will run immediately
    //any variables placed in here will be
})();

// traditional IIFE
(function(){

})();