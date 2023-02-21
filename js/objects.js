// (function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    // const person = {
    //     first: `Kaeden`,
    //     last: `Wieberdink`,
    //     sayHello: `Hello from Kaeden Wieberdink`
    // }
    // console.log(person.first)
    // console.log(person.last)

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    // console.log(person.sayHello)

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

//     let shoppers = [
//         {name: 'Cameron', amount: 180},
//         {name: 'Ryan', amount: 250},
//         {name: 'George', amount: 320}
//     ];
//
//     let billTotal = 200;
//     let remaining;
//     let i = 0
//     // let whoIsIt = prompt(`Which shopper are you looking for?`)
// if (shoppers[i].amount <= 200) {
//         let remaining = 200 - shoppers[i].amount
//         console.log (`You do not qualify for the discount. Your bill does not meet requirements.`);
//         console.log (`${shoppers[i].name} has spent $${shoppers[i].amount} in total. Still needs
//         to spend $` + remaining + ` to meet discount requirement. No discount has been applied.`)
//     } else if (shoppers[2].amount > 200) {
//         let billDiscount = shoppers[i].amount - (shoppers[i].amount * .12)
//         console.log (`You qualify for the discount! 12% discount will be applied to your bill.`);
//         console.log (shoppers[i].name + ` has spent $` + shoppers[i].amount.toFixed(2) + ` in total.
//         The discount price comes out to $` + billDiscount);
//     } else {
//         console.log (` Please input a valid number.`)
//     }





    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

     let bookss = [
        {
            title: `12 Rules of Life`,
            author: {
                firstName: 'Jordan',
                lastName: `Peterson`
            }
        },
        {
            title: `How Not to Die`,
            author: {
                firstName: `Michael`,
                lastName: `Greger`
                        }

        },
{
            title: `The Creative Act: A Way of Being`,
            author: {
                firstName: `Rick`,
                lastName: `Rubin`
                    }
},
{
            title: `The 80/20 Principle`,
            author: {
                firstName: `Richard`,
                lastName: `Koch`
                    }

},
{
            title: `The Power of Now`,
            author: {
                firstName: `Eckhart`,
                lastName: `Tolle`
                    }

}
    ]

    

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */


// I like this thing
for( let i = 0; i < bookss.length; i++) {
    console.log("We are at index " + i);
    console.log(bookss[i].title);
    console.log(bookss[i].author.firstName)
    console.log(bookss[i].author.lastName)
}

    bookss.forEach(function() {
        console.log(bookss.title);
        console.log(bookss.author)
})

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

function createBook(bookTitle, firstName, lastName){
    this.title = bookTitle;
    this.firstName = firstName;
    this.lastName = lastName;
    }

const booksList = [];
booksList.push(new createBook("Money Changes Everything", "William", "Goetzmann"));
booksList.push(new createBook("Be Have","Robert","Sapolsky"));
booksList.push(new createBook("Sapiens","Yuval","Harari"))

booksList.forEach(createBook => {
    console.log(createBook.title);
    console.log(createBook.firstName);
    console.log(createBook.lastName);
})

console.log(booksList);
booksList.forEach(function(book, index) {
    console.log("This is the " + (index + 1) + " loop");
    console.log(book.title);
    console.log(book.firstName);
    console.log(book.lastName);
})

for(let i = 0; i < booksList.length; i++) {
    console.log("We are at index " + i);
    console.log(booksList[i].title);
    console.log(booksList[i].firstName);
    console.log(booksList[i].lastName);


}


// })

// })();