"use strict"

    // This is called an Object Literal:
    // Most basic and fundamental way of creating an object
    // declare variable

const currentWeather = {
    temperature: 54.4,
    humidity: 28,
    clouds: 0,
    windDirection: "NNE"
}
//to access object properties, use dot notation
    // after the function place a dot and call for sub cat in object

    // console.log(currentWeather.temperature)


    // function displayWeatherProperties(prop) {
    // console.log(currentWeather[prop]);
    // }

// All these options work for calling for the properties of objects
// if I need to use a variable to access
// an object property, I can bracket notation

let weatherProperty = "clouds";
// console.log(currentWeather.clouds) // 0; dot notation used %95 of the time
// console.log(currentWeather["clouds"]); // 0;
// console.log(currentWeather[weatherProperty]); // 0;

// can concatenate with objects and properties as well

// console.log(`The current temperature is
// ${(currentWeather.temperature - 32) * (5 /
//     9).toFixed(1)}`);
//
// if (currentWeather.temperature < 80) {
//     console.log("It is so cold!!!");
// } else {
//     console.log("Ahhh nice and warm");
// }

// You can change the property and add entirely new properties to the objects

currentWeather.temperature = 63.7
delete currentWeather.humidity; // deletes properties
currentWeather.rain = false;

// I can use a for in loop to loop through
// an object's properties, getting their keys
// Syntax:

// for (let key in currentWeather) {

    // console.log(property); // will show the objects in the function
    // console.log(currentWeather[property]);// will show all properties

    // console.log(key + ": " + currentWeather[key]); // will show
    // objects and properties of each

// }

// Array of objects:
// Very, very, very, very common
const hourlyWeather = [
    {
        time: "08:00",
        temperature: 78.91,
        feels_like: 78.91
    },
    {
        time: "09:00",
        temperature: 79.57,
        feels_like: 79.57
    },
    {
        time: "10:00",
        temperature: 81.46,
        feels_like: 86.04
    },
    {
        time: "11:00",
        temperature: 84.49,
        feels_like: 89.24
    }
];

// Using a for each in an array
hourlyWeather.forEach(hourlyForecast =>
    console.log(hourlyForecast.temperature)
)


hourlyWeather.forEach(hourlyForecast =>
    console.log(`At ${hourlyForecast.time} the temperature will be
    ${hourlyForecast.temperature}`)
)

// Object destructuring:
// SI can destructure an object in the parameter of the
// forEach loop
hourlyWeather.forEach(({time,temperature,feels_like}) =>
    console.log(`At ${time} the temperature will be ${temperature}, 
    and will feel like ${feels_like}`))

// I can use a for loop
// They just loop
for (let i = 0; i < hourlyWeather.length; i++) {
    console.log(hourlyWeather[i].temperature);
}

// for ... of loop // used to loop through an array
// very quick to write
// is missing some pieces like the index

const temps = [];
for (const forecast of hourlyWeather) {
    console.log(forecast.temperature);
    temps.push(forecast.temperature);
}
console.log(temps);
let total = 0;
temps.forEach((temp)=>{
    total += temp;
})
console.log("The average temperature is " + total/temps.length)

// loops over an array, pulling out each element one at a time and
// calls it variable name such as forecast in the example above

// you can also loop over a string with a for ... of

// const myString = "wassupplaya"
// for (const letter of myString) {
//     console.log(letter)
// }



