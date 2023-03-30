import {getStarWarsMovie, getStarWarsPlanet, getStarWarsCharacterEye} from "./github.js";


/*
    TODO: Using separation of concern principles, module syntax, and
        async/await, create a series of code that:
        - uses the Star Wars API: https://swapi.dev/
        - returns a specific planet
        - returns the eye color of a specific character
        - returns all of the data on a specific movie
        *BONUS* - Add it onto the DOM
        ...
        Your code should have:
        - a main thread that is easy to read
        - separate js file(s) for function declarations
        - proper syntax to resolve promises (don't cook your ticket)
 */

(async () => {

    let starWarsFilm = await getStarWarsMovie(3);
    console.log(starWarsFilm)

    let starWarsPlanets = await getStarWarsPlanet(6);
    console.log(starWarsPlanets)

    let starWarsCharacterEye = await getStarWarsCharacterEye(1);
    console.log(starWarsCharacterEye)

})();