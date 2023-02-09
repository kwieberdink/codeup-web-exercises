// let a = 1;
// let b = a++;
// let c = ++a;
// console.log(a) //a = 3
// console.log(b) // b = 1
// console.log(c) // c = 3

// let d = "hello";
// let e = false;
// d++
// console.log(d) // NaN
// e++
// console.log(e) // 1

// let perplexed;
// perplexed + 2
// console.log(perplexed) // undefined

// let price = 2.7;
// console.log(price.toFixed(2)) // 2.70

// let price = "2.7";
// console.log(price.toFixed(2)); //Not a function

// isNaN(0);
// console.log(isNaN(0)); //false
//
// isNaN(1);
// console.log(isNaN(1)); //false
//
// isNaN("");
// console.log(isNaN("")); //false
//
// isNaN("string");
// console.log(isNaN("string")); // true
//
// isNaN("0");
// console.log(isNaN("0")); // false
//
// isNaN("1");
// console.log(isNaN("1")); // false
//
// console.log(isNaN("3.145")); // false
//
// console.log(isNaN(Number.MAX_VALUE)); // false
//
// console.log(isNaN(Infinity)); // false
//
// console.log(isNaN("true")); // true
//
// console.log(isNaN(true)); // false
//
// console.log(isNaN("false")); // true
//
// console.log(isNaN(false)); // false
//
// console.log(isNaN(isNaN==isNaN)); // false
//
// !true // false
//
// !false // true
//
// !!true // true
//
// !!false // false
//
// !!0 // false
//
// !!-0 // false
//
// !!1 // true
//
// !!-1 // true
//
// !!0.1 // true
//
// !!"hello" // true
//
// !!"" // false
//
// !!`` // false
//
// !!"false" // true
//
// !!"0" // true
//
// Exercise 2:
//
// let sample = "Hello Codeup ";
// sample += "Students";
// sample = sample.replace(`Students`,`Class`);
// console.log(`The length of the sample is `+ sample.length); // 12
// console.log(sample.toUpperCase(sample));
//
// console.log(sample.indexOf(`c`));
// console.log(sample.indexOf(`C`));
//
// // sample.substring(6,12)
// console.log(sample.substring(sample.indexOf(`C`), sample.indexOf(`p`)+1));
//
// Exercise 3:
// Scenario 1:
// let movie1 = `The Little Mermaid`, num1 = 3;
// let movie2 = `Brother Bear`, num2 = 5;
// let movie3 = `Hercules`, num3 = 1;
// thePrice =((num1 + num2 + num3)*3)
// let consoleMessage = (`The price for ${movie1}, ${movie2}, and ${movie3} would be ${thePrice} dollars in total.`)
// console.log(consoleMessage)
//
// Scenario 2:
// let company1 = `Google`, rate1=400, hour1=6;
// let company2 = `Amazon`, rate2=380, hour2=6;
// let company3 = `Facebook`, rate3=350, hour3=4;
// theCost= ((rate1*hour1)+(rate2*hour2)+(rate3+hour3));
// consoleMessage=`The payment received from ${company1}, ${company2}, and ${company3} all together is ${theCost} dollars.`;
// console.log(consoleMessage);
//
// Scenario 3:
// let classNotFull=true;
// let classConflict= true;
// let enrolled= classNotFull && classConflict
//
// Scenario 4:
// let offerValid = true;
// let hasPremium = true;
// let cartSize = 7;
//
// let moreThan2 = offerValid && (cartSize > 2);
// let memberDiscount = offerValid && hasPremium
//
// if (memberDiscount) {
//     greeting = `Welcome Back Discount Member! We have processed your coupon offer!`
// } else if (moreThan2){
//     greeting = `Thank you for shopping at HEB! The coupon offer was valid and you purchased more than two items.`
// } else {
//     greeting = `We apologize for the inconvenience, however you have not met the criteria for the coupon. Have a great day!`
// }
//
// console.log(moreThan2)
//
// let username = `codeup`;
// let password = `notastrongpassword`;
