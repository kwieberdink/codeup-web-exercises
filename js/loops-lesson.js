"use strict"
// i = incrementer
// let i = 1;
// while (i < 10) {
//     console.log(`Loop #${i}`);
//     i++
// }
// Example problems that require a loop for a solution
// Use a for loop to print all the numbers from 1 to 10
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// 2. Use a for loop to calculate the factorials of 5 (i.e., 5! = 5 x 4 x 3 x 2 x 1
// const getFactorial = (num) => {
//     let result = num;
//     for(let i = num; i > 0; i--) {
//         result *= i;
//     }
//     console.log(result)
//     return result
// }
//
// console.log(getFactorial(5))

// 3. Use a for loop to find the sum of all the numbers from 1 to 100



// What about loops within loops?
// 4. This is a hard one! Use nested loops to print a pyramid pattern

const buildPyramid = (rows) => {
    // loop through rows
    for (let i = 1;i <= rows; i++) {
        let row = "";
        // Loop to add spaces
        for (let j = 1; j <= rows - i; j++) {
            row+="  "
        }
        // Loop to add the asterisks
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += "* ";
        }
        console.log(row)
    }
}

buildPyramid(5)