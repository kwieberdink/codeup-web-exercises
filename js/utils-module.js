// Formats a number into US Currency
export const dollaDolla = (number, language='en', country='US', currency='USD') => {
    return parseFloat(number).toLocaleString(`${language}-${country}`, {
        style: "currency", currency: currency});
};

// Formats a number into desired Currency
export const formatToLocaleString = (number, language, country, currency) => {
    return parseFloat(number).toLocaleString(`${language}-${country}`, {
        style: "currency", currency: currency});
};

//
export function isNumericAndNotNaN(input) {
    return !isNaN(parseFloat(input)) && input !== null && typeof
        input !== "boolean" && typeof input !== "string";
}

export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function arrayOfRandomNumbers(lengthOfArray) {
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