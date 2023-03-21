// let person = {
//     firstName: "Jason",
//     lastName: "Merrell",
//     email: "jason.merrell@codeup.com"
// };
//
// let personJSON = JSON.stringify(person);

// const getMovie = () => {
//         fetch('https://swapi.dev/api/films/1/') // sent cook out to go get product
//             .then(response => response.json()) // cook received the product
//             .then(data => {
//                     // console.log(data);
//                     return data
//             }).catch(error => {
//                 console.log(error);
//         })
// }

// async function getMovieAsync(){
//     try{
//         let response = await fetch('https://swapi.dev/api/films/1/')
//         let data = await response.json();
//         console.log(data);
//     } catch(error) {
//         console.log(error)
//     }
// }

function getMovie(movie = 1) {
            // Takes an optional parameter 'movie'.
    return fetch(`https://swapi.dev/api/films/${movie}`)
            // makes a GET request to Star Wars API. The specific movie requested is determined by the 'movie' parameter
        .then(response => response.json())
            // Handle response from the API. 'json()' method is called on the response object to convert the response data into a JS object
        .then(data => {
            // console.log(data);
            return data
        }).catch(error => {
        console.log(error);
            // 'then()' method is used to handle the converted data from the API response. Logs the data to the console, then returns data.
            // If there is an error with the request, the 'catch()' method is used to log the error to the console
    })
}

getMovie().then(movie => {
    /// continue on with movie data;
    console.log(movie);
})

// async/await method
async function getMovieA(movie) {

}
// same thing as the above
const getMovieB = async (movie) => {
    let response = await fetch(`https://swapi.dev/api/films/${movie}`)
    let data = await  response.json();
    return data;
}
// let newHope = getMovieB(1)
(async()=>{
    // main line of code
    let newHope = await getMovieB(1);
})();


// Searching for Luke Skywalker within the data
const getPeople = async (people) => {
    // function defined with the `async` keyword, indicating that it returns a promise that resolves with the value returned by the function
    let response = await fetch(`https://swapi.dev/api/people/${people}`)
    // Send a HTTP GET request to the Star Wars API using the `fetch()` method.
    // The `people` parameter is used to dynamically insert a specific character's ID into the URL.
    // The `await` keyword is used to wait for the response to be returning before proceeding
    let data = await response.json();
    // Uses `json()` method to extract the JSON data from the HTTP response
    // `await` keyword is used again to wait for the JSON data to be extracted
    return data;
    // Returns the JSON data retrieved from the API as the value of the `getPeople` function
}
(async()=>{
    let lukeSkywalker = await getPeople(20)
    // IIFE that calls the `getPeople` function and logs the returned data to the console.
    // The `await` keyword is used to wait for the `getPeople` function to complete before assigning its returned value to the `lukeSkywalker` variable.
    console.log(lukeSkywalker);
})();

