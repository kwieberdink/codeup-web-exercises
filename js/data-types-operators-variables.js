// Exercise 1:

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
// console.log(price.toFixed(2)) // "2.70"

// console.log(parseFloat("2.7").toFixed(2))
// let price = "2.7";
// console.log(price.toFixed(2)); //Not a function

// isNaN(0);
// console.log(isNaN(0));
// false

// isNaN(1);
// console.log(isNaN(1));
// false

// isNaN("");
// console.log(isNaN(""));
// false

// isNaN("string");
// console.log(isNaN("string"));
// true

// isNaN("0");
// console.log(isNaN("0"));
// false

// isNaN("1");
// console.log(isNaN("1"));
// false

// console.log(isNaN("3.145"));
// false

// console.log(isNaN(Number.MAX_VALUE));
// false

// console.log(isNaN(Infinity));
// false

// console.log(isNaN("true"));
// true

// console.log(isNaN(true));
// false

// console.log(isNaN("false"));
// true

// console.log(isNaN(false));
// false

// console.log(isNaN(isNaN==isNaN));
// false

// !true
// false

// !false
// true

// !!true
// true

// !!false
// false

// !!0
// false

// !!-0
// false

// !!1
// true

// !!-1
// true

// !!0.1
// true

// !!"hello"
// true

// !!""
// false

// !!``
// false

// !!"false"
// true

// !!"0"
// true

// Exercise 2:
//
// let sample = "Hello Codeup ";
// sample += "Students";
// sample = sample.replace(`Students`,`Class`);
// console.log(`The length of the sample is `+ sample.length); // 12
// console.log(sample.toUpperCase(sample));
//
// let cIndex= sampleJoinReplace.indexOf(`c`);
// console.log(cIndex);

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
// let pricePerDay = 3
// let consoleMessage = (`The price per day for each movie is $${pricePerDay}. The price for ${movie1}, ${movie2}, and ${movie3} would be $${thePrice} in total.`)
// console.log(consoleMessage)
//
//       Scenario 2:
// let company1 = `Google`, rate1=400, hour1=6;
// let company2 = `Amazon`, rate2=350, hour2=10;
// let company3 = `Facebook`, rate3=380, hour3=4;
// theCost= ((rate1*hour1)+(rate2*hour2)+(rate3+hour3));
// consoleMessage=`The payment received from ${company1}, ${company2}, and ${company3} all together is $${theCost}.`;
// console.log(consoleMessage);

//       Teacher Example:
// let google = 400 * 6;
// let meta = 350 * 10;
// let amazon = 380 * 4;
// let paycheck = google + meta + amazon;
// let formattedPaycheck = paycheck.toLocaleString("en-US",{style:`currency`, currency:`USD`})
// console.log(formattedPaycheck)

//         Scenario 3:
// let classNotFull=true;
// let classConflict= true;
// let enrolled= classNotFull && classConflict

//         Teacher Example:
// let scheduleConflicts = false;
// let maxClassSize = 30;
// let currentClassSize = 24;
//
// let canEnroll = !scheduleConflicts && (currentClassSize < maxClassSize);
// console.log(canEnroll)

//         Scenario 4:
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

//         Teacher Example:
// let minCartSize = 2;
// let cartSize = 4;
// let premiumMember = false;
// let offerExpired = false;
//
// let canOfferApply = (premiumMember || (cartSize >= minCartSize)) && !offerExpired;
// console.log(canOfferApply);

//         Exercise 4:
// let username = `codeup`;
// let password = `notastrongpassword`;
//
// let atLeastFivePassword = password.length >= 5;
// let password.length >= 5;
//
// let usernameNotInPassword = password.indeexOf(username) === -1;
//
// let usernamemNotInPassword = ! password.includes(username);
// let userNameNotLong = username.length <=20
//
//         Teacher Example:
let username = `codeup`
let password = `notastrongpassword`

let minChar = password.length >= 5; // password must be at least 5 characters

let noUsername = password.indexOf(username) === -1; // the password must not include the username
// can use .includes or .search to do the same thing
// console.log(noUsername)

let maxUserChar = username.length <= 20 // the username must be no more than 20 characters
// console.log(maxUserChar)

let userLength = username.length;
let passLength = password.length;

let firstCharUser = username.substring (0,1);
let lastCharUser = username.substring((userLength - 1), userLength);

let firstCharPass = password.substring (0,1);
let lastCharPass = password.substring((passLength - 1), passLength);

let hasWhiteSpace = firstCharUser === ` ` || lastCharUser === ` ` || firstCharPass === ` ` || lastCharPass === ` `;

console.log(hasWhiteSpace);