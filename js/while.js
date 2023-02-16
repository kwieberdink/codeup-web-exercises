"use strict"

// const whileSquared = () => {
//     let input = 0
//     for (let i = 1; i <= 16; i > 0) {
//     }
//
// }

// TEACHER EXAMPLE:

// let i = 1;
// while (i <= 16) {
//     console.log(Math.pow(2, i));
//     i++;
// }

// Do While Loop
//An ice cream seller can't go home until she sells all of her cones. First write
// enough code that generates a random number between 50 and 100 representing the
// amount of cones to sell before you start your loop. Inside of the loop your
// code should generate another random number between 1 and 5, simulating the
// amount of cones being bought by her clients. Use a do-while loop to log to the
// console the amount of cones sold to each person. The below code shows how to
// get the random numbers for this exercise.

let conesInventory = randomNumber(50,100);

do {
    let conesWanted = randomNumber(1,5)
    if (conesWanted > conesInventory) {
        console.log(`Cannot sell you ${conesWanted}, I only have ${conesInventory}`);
        console.log(`${conesInventory} sold...`)
        conesInventory = 0
    } else {
        console.log(`${conesWanted} sold...`)
        conesInventory = conesInventory - conesWanted;
    }
    console.log(`${conesInventory} left`);
} while (conesInventory > 0);
console.log(`Yay! I've sold them all!`)