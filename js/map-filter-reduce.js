const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// TODO: Create an array of user objects where each user object has at least 3 languages in the languages array. User .filter

const userLanguage = users.filter(user => user.languages.length >= 3)

// TODO: Create an array of strings, where each element is a user's email address

let emailReturn = users.map((user) => {
    return user.email
});
console.log(emailReturn);

// Anon Function
// emails.forEach(email => console.log(email));

// TODO: Get the total years of experience from the list of users. Once acquiring the total of years, use the result to calculate the average. Use .reduce

let totalYears = users.reduce((acc, {yearsOfExperience: years, email, id}) => {
    return acc + years;
},0);
let averageYears = totalYears / users.length;
console.log(averageYears);

// TODO: Use .reduce to get the longest email from the list of users

let longestEmail = users.reduce((acc, user) => {
    if (acc.length < user.email.length){
        return user.email;
    } else {
        return acc;
    }
},'');
console.log(longestEmail);


// TODO: Use .reduce to get the list of user's names in a single string
// Ex. YOur instructors are: ryan, luis, zach, fernando, justin.

let instructors = users.reduce((acc, user, index) => {
    if (index+1 === users.length) {
        return acc + `${users.length}.`;
    } else {
        return acc + `${user.name},`
    }
}, `Your instructors are: `)

// BONUS

let uniqueLanguages = users.reduce((acc, user) => {
    user.languages.forEach(function(language){
        if(!acc.includes(language)){
            acc.push(language);
        }
    });
    return acc;
}, []);
console.log(uniqueLanguages)


// Using Map to Reform Objects in an Array

const books = [
    {
        title: 'The Great Gatsby',
        author: {
            firstName: 'F. Scott',
            lastName: 'Fitzgerald'
        },
        published: 1925,
        genre: 'Fiction'
    },
    {
        title: 'To Kill a Mockingbird',
        author: {
            firstName: 'Harper',
            lastName: 'Lee'
        },
        published: 1960,
        genre: 'Fiction'
    },
    {
        title: 'The Catcher in the Rye',
        author: {
            firstName: 'J.D.',
            lastName: 'Salinger'
        },
        published: 1951,
        genre: 'Fiction'
    },
    {
        title: 'The Lord of the Rings',
        author: {
            firstName: 'J.R.R.',
            lastName: 'Tolkien'
        },
        published: 1954,
        genre: 'Fantasy'
    },
    {
        title: 'Pride and Prejudice',
        author: {
            firstName: 'Jane',
            lastName: 'Austen'
        },
        published: 1813,
        genre: 'Fiction'
    },
    {
        title: '1984',
        author: {
            firstName: 'George',
            lastName: 'Orwell'
        },
        published: 1949,
        genre: 'Science Fiction'
    },
    {
        title: 'The Hobbit',
        author: {
            firstName: 'J.R.R.',
            lastName: 'Tolkien'
        },
        published: 1937,
        genre: 'Fantasy'
    },
    {
        title: 'One Hundred Years of Solitude',
        author: {
            firstName: 'Gabriel',
            lastName: 'García Márquez'
        },
        published: 1967,
        genre: 'Magical Realism'
    },
    {
        title: 'The Picture of Dorian Gray',
        author: {
            firstName: 'Oscar',
            lastName: 'Wilde'
        },
        published: 1890,
        genre: 'Fiction'
    },
    {
        title: 'The Hitchhiker\'s Guide to the Galaxy',
        author: {
            firstName: 'Douglas',
            lastName: 'Adams'
        },
        published: 1979,
        genre: 'Science Fiction'
    }
];
const fictionBooks = books.map(({title, published, genre, author}) => {
    if(book.genre === "Fiction") {
    // return {
    //     title: book.title,
    //     published: book.published,
    //     genre: book.genre,
    //     author: `${book.author.firstName} ${book.authoer.lastName}`
    // }
    }
    return book.genre === "Fiction" ? {title,published,genre,author: `${book.author.firstName} ${book.authoer.lastName}`} : underfined;
}).filter(book => book);
console.log(fictionBooks);