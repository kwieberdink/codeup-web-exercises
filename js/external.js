"use strict";
console.log(`Hello from external JavaScript`)
alert(`Welcome to my Website!`)
let favColor=prompt(`What is your favorite color?`)
console.log(`Great, ${favColor} is my favorite color too!`)
//Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
//
// When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
// Use an alert to show the results of each problem.
// Finally, commit the changes to your git repository, and push to GitHub.


// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
// and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

let movie1 =3;
let movie2 =5;
let movie3 =1;
let pricePerDay=prompt(`How much does it cost to rent the movie per day?`);
let totalCost=((movie1+movie2+movie3)*pricePerDay);
alert(`The price per day for each movie is $${pricePerDay}. The total cost for all three movies would be $${totalCost}.`);

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate
// per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week?
// You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

let hoursGoogle=prompt(`How many hours did you work for Google?`)
let hoursMeta=prompt(`How many hours did you work for Meta?`)
let hoursAmazon=prompt(`How many hours did you work for Amazon?`)
let google = 400 * hoursGoogle;
let meta = 350 * hoursMeta;
let amazon = 380 * hoursAmazon;
let paycheck = google + meta + amazon;
let formattedPaycheck = paycheck.toLocaleString("en-US",{style:`currency`, currency:`USD`})
alert(`You will receive ${formattedPaycheck} as your payment this week.`)

// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict
// with her current schedule.

let scheduleConflicts = confirm(`Does this class conflict with your current schedule?`);
let maxClassSize = prompt(`What is the max capacity for the class?`);
let currentClassSize = prompt(`How many student are currently enrolled in the class?`)

let canEnroll = !scheduleConflicts && (currentClassSize < maxClassSize);
if (canEnroll){
    alert(`You are eligible to enroll in the course!`)
} else {
    alert(`You are not eligible to enroll into the course`)
}

// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
// Premium members do not need to buy a specific amount of products.

let minCartSize = prompt(`How many items are required for the coupon to be effective?`)
let cartSize = prompt(`How many items do you have in your cart?`)
let premiumMember = confirm(`Are you a premium member?`)
let offerExpired = confirm(`Is the offer expired?`)

let canOfferApply = (premiumMember || (cartSize >= minCartSize)) && !offerExpired;

if (canOfferApply){
    alert(`The offer has been applied to your order.`)
} else{
    alert(`The offer does not apply to you.`)
}
