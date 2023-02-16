"use strict"

console.log(`Running for_loops.js`)

// (()=>{
//
// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// Create a function named showMultiplicationTable that accepts a number and console.logs
// the multiplication table for that number (just multiply by the numbers 1 through 10)

// const showMultiplicationTable = (num) => {
//     for ( let i = 1; i <= 10; i++){
//         let product = num * i;
//         console.log(`${num} x ${i} = ${product}`)
//     }
// }
//
// showMultiplicationTable(6)

// TEACHER EXAMPLE:

    // const showMultiplicationTable = (number) => {
    //     let table = ``
    //     // (DECLARING; CONDITION; INCREMENT/DECREMENT)
    //     for (let i = 1; i <= 10; i++) {
    //         // console.log(i)
    //         let daMath = parseInt(number) * i
    //         let output = `${number} x ${i} = ${daMath}\n`;
    //         table = table + output;
    //     }
    //     return table;
    // }
    // let sevenTable = showMultiplicationTable(7)
    // console.log(sevenTable)

//Use a for loop and the code from the previous lessons to generate 10 random numbers
// between 20 and 200 and output to the console whether each number is odd or even.


// const evenOrOdd = () => {
//     for (let i = 1; i <= 10; i++) {
//         let number = randomNumber(20, 200)
//         if (number % 2 === 0) {
//             console.log(`${number} is even`);
//         } else {
//             console.log(`${number} is odd`);
//         }
//     }
// }
// console.log(evenOrOdd())

// TEACHER EXAMPLE:

// for(let i = 1; i <= 10; i++) { // do a loop 10 times
//     let myRandomNum = randomNumber(20,200);
//     //console.log(myRandomNum);
//     if (myRandomNum % 2 === 0) { // if myRandomNum is even
//         console.log(`${myRandomNum} is even.`)
//     } else { // else it is odd
//         console.log(`${myRandomNum} is odd.`)
//     }
// }

// Create a for loop that uses console.log to create the output shown below.

// const numberSteps = (rows) => {
//     // loop through rows
//     for (let i = 1; i <= rows; i++) {
//         let row = '';
//         // add incrementing numbers to the current row
//         for (let j = 1; j <= i; j++) {
//             row += i;
//         }
//         console.log(row)
//     }
// }
//
// numberSteps(9)

// TEACHER EXAMPLE:

// loop 9 times
// for (let i = 0; i < 9; i++) {
//     let output = `${i+1}`;
//     // loop again with i as my declaration. condition is >= 0. decrement
//     for(let j = i; j > 0; j--) {
//         let moNumbers = `${i+1}`;
//         output += moNumbers
//     }
//     console.log(output) //check to see if correct
// }
//
// // SPACE MAGIC METHODS
// // method only works for strings, not numbers
// for(let i = 1; i < 10; i++) {
//     let output = `${i}` .repeat(i);
//     console.log(output);
// }

// Create a for loop that uses console.log to create the output shown below.

// const decreasingByFive = (num) => {
//     // Loop through rows
//     while (num !== 0) {
//         num -= 5
//         console.log(num)
//     }
// }
//
// decreasingByFive(105)

// TEACHER EXAMPLE:

// for(let i = 100; i > 0; i -= 5) {
//     console.log (i)
// }

// })();





