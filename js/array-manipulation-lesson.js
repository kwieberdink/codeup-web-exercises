
"use strict";

let daysOfWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

const myName = "Kaeden";
const dPosition = myName.indexOf(`d`);
console.log(dPosition);

///// Splits the name into an array, and determines where the letter is
///// Turning a string into an array
///// If sep by commas, input the comma in quotations ","
///// If no input it will put every letter into an array

const myNameArray = myName.split(``)
console.log(myNameArray)

///// Will give you the location of the item in the array
const thursday = daysOfWeek.indexOf("Thursday");
console.log(thursday)

///// removes the last item on an array, and stores it into the variable
// const removeLast = daysOfWeek.pop();
// console.log(daysOfWeek)
// console.log(removeLast)

///// removes the first item on an array, and stores it into the variable
// const removeFirst = daysOfWeek.shift();
// console.log(daysOfWeek);
// console.log (removeFirst);

///// SLICING
///// Slice is meant to grab a piece of an array and save them to a variable
/////
// const firstHalf = daysOfWeek.slice(0,2);
// console.log(daysOfWeek)
// console.log(firstHalf)

///// Removing an item in the middle

///// Finds the position of Thursday in the array
const indexOfThursday = daysOfWeek.indexOf(`Thursday`);
// console.log(daysOfWeek)
// const lastHalf = daysOfWeek.slice(indexOfThursday+1);
// const firstHalf = daysOfWeek.slice(0, indexOfThursday);
// console.log(lastHalf)
// daysOfWeek = daysOfWeek.slice(0,indexOfThursday).join(`,`) + `,`;
// console.log(daysOfWeek)
// daysOfWeek += lastHalf.join(`,`);
// console.log(daysOfWeek)
// daysOfWeek = daysOfWeek.split(`,`)
// console.log(daysOfWeek)

///// SPREAD OPERATOR
// daysOfWeek = [
//     ...firstHalf,
//     ...lastHalf,
//     "Merrellday"
// ]
// console.log(daysOfWeek)

// daysOfWeek.splice(indexOfThursday, 1, "Merrellday")
// console.log(daysOfWeek);

// let removedDay = daysOfWeek.splice(indexOfThursday, 1)
// console.log(daysOfWeek);
// console.log(removedDay.join())

// Sorts alphabetically or numerically
// console.log(daysOfWeek.sort())

// console.log(daysOfWeek.reverse()) // reverses an array

// console.log(daysOfWeek.sort().reverse()) // sorts and reverses

// daysOfWeek.push(`Merrelday`) // Will push an item to the end of the array
// console.log(daysOfWeek)

// daysOfWeek.unshift(`Merrelday`); // will put the item at the beginning of the array
// console.log(daysOfWeek)

// let discordName1 = "[GUILD]Jason"
// let discordName2 = "Jason[GUILD]"
// console.log(discordName1.split(`[GUILD]`).join(""));
// console.log(discordName2.split(`[GUILD]`).join(""));

let stringDays = "Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday";
let arrayDays = stringDays.split('|');
console.log(arrayDays);
console.log(arrayDays.join(`,`));