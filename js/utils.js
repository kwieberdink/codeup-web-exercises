"use strict"

// Formats a number into US Currency
const dollaDollaBills = (number, language='en', country='USD', currency='USD') => {
    return parseFloat(number).toLocaleString(`${language}-${country}`, {
        style: "currency", currency: currency});
};

// Formats a number into desired Currency
const formatToLocaleString = (number, language, country, currency) => {
    return parseFloat(number).toLocaleString(`${language}-${country}`, {
        style: "currency", currency: currency});
};

// Simple version of number into US Currency
const formatterr = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

//
function isNumericAndNotNaN(input) {
    return !isNaN(parseFloat(input)) && input !== null && typeof
        input !== "boolean" && typeof input !== "string";
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arrayOfRandomNumbers(lengthOfArray) {
    const array = [];
    for (let i = 0; i < lengthOfArray; i++) {
        let newRandomNumber = randomNumber(1,lengthOfArray + 100);
        while(array.includes(newRandomNumber)) {
            newRandomNumber = randomNumber(1,lengthOfArray + 100)
        }
        array.push(newRandomNumber)
    }
    return array;
}
