

console.log(`Running break_and_continue.js`)

// (() => {
// Prompt for input
// let userOdd = prompt`Input an odd number between 1 and 50.`
// create a loop that validates if input is odd
// loop needs to have an option that reruns loop, and option that moves past loop

// const oddInput = () => {
//     let input = 0
//     while (true) {
//         // if prompt does not meet criteria, the prompt with alert
//         // and continue until input does not hit criteria
//         input = parseInt(prompt`Input an odd number between 1 and 50`)
//         if (input % 2 == 0 || input > 50 || input <= 0) {
//         alert` Invalid number`
//             continue;
//         }
//         // breaks if criteria is not met
//         break;
    // Will go through criteria mentioned below, in a loop up to the number 50
    // when input === i, then it will console log that the number is skipped
    // and continue outputting the i until max number is hit

//     console.log(`Number to skip is: ${input}` )
//     for(let i = 1; i <= 50; i += 2) {
//         if (i === input) {
//             console.log(`Yikes! Skipping number: ${input}`)
//             continue;
//         }
//         console.log(`Here is an odd number: ${i}`);
//     }
// }
//
// console.log(oddInput())

// TEACHER EXAMPLE:


// let userPrompt; // declaring it outside globally
// let userPromptNum;// to access in the f(x)
//
// while (true) { // this is dangerous
//     userPrompt = prompt(`Please enter an odd number between 1 and 49.`);
//     userPromptNum = parseInt(userPrompt);
//     if(userPromptNum % 2 === 1 && userPromptNum >= 1 && userPromptNum <= 50) {
//         break;
//     }
// }
// // userPromptNum is Good to Go!
// for (let i = 1; i <= 49; i+=2) {
//     if (i=== userPromptNum) {
//         console.log(`Yikes! Skipping numberL ${i}`);
//         continue;
//     }
//     console.log(`Here is an odd number: ${i}`);
// }


// create loop that outputs all odd numbers between 1 and 50
// must state "Number to skip is: (input)
// must state: "Here is an odd number: (num)
// must state: Yikes! Skipping number: (input)

// except the number that was inputted

// })();