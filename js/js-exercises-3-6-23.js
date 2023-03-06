const cities = [
    {
        name: "New York City",
        state: "New York",
        population: 8336817
    },
    {
        name: "Los Angeles",
        state: "California",
        population: 3979576
    },
    {
        name: "Chicago",
        state: "Illinois",
        population: 2693976
    },
    {
        name: "Houston",
        state: "Texas",
        population: 2320268
    },
    {
        name: "Phoenix",
        state: "Arizona",
        population: 1680992
    },
    {
        name: "Philadelphia",
        state: "Pennsylvania",
        population: 1584064
    },
    {
        name: "San Antonio",
        state: "Texas",
        population: 1547253
    },
    {
        name: "San Diego",
        state: "California",
        population: 1423851
    },
    {
        name: "Dallas",
        state: "Texas",
        population: 1343573
    },
    {
        name: "San Jose",
        state: "California",
        population: 1030119
    },
    {
        name: "Austin",
        state: "Texas",
        population: 964254
    },
    {
        name: "Jacksonville",
        state: "Florida",
        population: 903889
    },
    {
        name: "Fort Worth",
        state: "Texas",
        population: 895008
    },
    {
        name: "Columbus",
        state: "Ohio",
        population: 892533
    },
    {
        name: "San Francisco",
        state: "California",
        population: 883305
    },
    {
        name: "Charlotte",
        state: "North Carolina",
        population: 885708
    },
    {
        name: "Indianapolis",
        state: "Indiana",
        population: 876384
    },
    {
        name: "Seattle",
        state: "Washington",
        population: 753675
    },
    {
        name: "Denver",
        state: "Colorado",
        population: 727211
    },
    {
        name: "Washington",
        state: "District of Columbia",
        population: 702455
    }
];

//08
// Make sure you are comfortable with these techniques: looping over the array,
// console-logging the name of each city. Then try console-logging the name and
// state. Then try console-logging all the cities in Texas with populations over
// 1 million.  Write a function that accepts one city object and returns true if
// the city is in Texas.  Write a function that accepts an array of city objects
// and the name of a state and returns an array with only the cities in that state.

for (let i = 0; i < cities.lenght; i++) {
    if (cities[i].state === "Texas" && cities[i].population > 10000000) {
        console.log(`${cities[i].name}, ${cities[i].state}`)
    }
}

function isInTexas(cityObject) {
    if(cityObject.state === "Texas") {
        return true;
    } else {
        return false;
    }
}

/**
 * Get Sum of People's Budget
 * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
 *
 * Examples
 *
 * >> getBudgets([
 *        { name: "John", age: 21, budget: 23000 },
 *        { name: "Steve",  age: 32, budget: 40000 },
 *        { name: "Martin",  age: 16, budget: 2700 }
 *    ]) ➞ 65700
 * >> getBudgets([
 *        { name: "John",  age: 21, budget: 29000 },
 *        { name: "Steve",  age: 32, budget: 32000 },
 *        { name: "Martin",  age: 16, budget: 1600 }
 *    ]) ➞ 62600
 */


const peopleAndBudget = [
{ name: "John", age: 21, budget: 23000 },
{ name: "Steve",  age: 32, budget: 40000 },
{ name: "Martin",  age: 16, budget: 2700 }
]
function getBudgets(arrayOfObjects) {
    let totalBudget = 0;
    arrayOfObjects.forEach(object => totalBudget += object.budget)
}

// function getBudgets(arrayOfObjects) {
//     return arrayOfObjects.reduce((total,object) => {return total + object.budget}, 0);
// }


/**
 * Hashes and Pluses
 * Create a function named hashPlusCount that returns the number of hashes and pluses in a string.
 *
 * Examples
 *
 * hashPlusCount("###+") ➞ [3, 1]
 * hashPlusCount("##+++#") ➞ [3, 3]
 * hashPlusCount("#+++#+#++#") ➞ [4, 6]
 * hashPlusCount("") ➞ [0, 0]
 *
 * Notes
 * Return [0, 0] for an empty string.
 * Return in the order of [hashes, pluses].
 */


/**
 * TODO:
 * Write a function named reverseOdd that will take a string as argument, reverse all the words which have odd length. The even length words are not changed.
 *
 * Examples
 *
 * >> reverseOdd("Bananas") ➞ "sananaB"
 * >> reverseOdd("One two three four") ➞ "enO owt eerht four"
 * >> reverseOdd("Make sure uoy only esrever sdrow of ddo length") ➞ "Make sure you only reverse words of odd length"
 *
 * Notes
 * There is exactly one space between each word and no punctuation is used.
 * Should work with empty string.
 * Should work with only one word.
 */


// Create a function, createNames, that takes in an array of first names and an array of last names. The function should return an array of name objects with firstName and lastName properties with the input array values. Assume both input arrays are not empty, the same length and only contain string elements.
//
//     var firstNames = ['CJ', 'Max', 'Claude', 'Meowmeow'];
// var lastNames = ['Cat', 'Feline', 'Kitten', 'Calico'];
//
// createNames(firstNames, lastNames) // returns...
//
//     [
//     {r
//         firstName: 'CJ',
//         lastName: 'Cat'
//     },
//         {
//             firstName: 'Max',
//             lastName: 'Feline'
//         },
//         {
//             firstName: 'Claude',
//             lastName: 'Kitten'
//         },
//         {
//             firstName: 'Meowmeow',
//             lastName: 'Calico'
//         }
//     ]
//
// HINT: a solution may involve using a for loop to iterate over the length of one array to push each name object onto an array of name objects that will be returned from the function.



// Create a function that accepts an object with two properties, parcelNumber and weight, and returns the weight.


// function parcelWeight(object){
//     return object.weight;
// }
//
// var parcel = {
//     parcelNumber: 1,
//     weight: 20
// }
//

// function parcelWeight(object){
//     return object.weight;
// }
//
// var parcel = {
//     parcelNumber: 1,
//     weight: 20
// }


// console.log(parcelWeight(parcel));
// output: 20
