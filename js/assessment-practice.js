// (function() {
    "use strict";

    // OPERATORS & PRIMITIVE TYPES

console.log(typeof(22));
console.log(typeof("Howdy"));
console.log(typeof(true));
console.log(typeof(undefined));
console.log(typeof(null));

// Arithmetic Operators
// + (addition), / (division), - (subtraction), * (multiplication), % (remainder)


// String Concatenation
// putting two strings together using the + (addition) operator
// + sign is considered an overloaded operator, meaning the operator
// function depends on the operands.
// "Hello," + "World!" = "Hello, World!"

    // Logical Boolean
    // Allows for the combination of boolean values
    // && (AND) True if both operands are true, false otherwise
    // || (OR) True if either operator is true, false otherwise
    // ! (NOT) The opposite

    // Comparison
    // == Equal in value; 4 == `4` true
    // === Equal in value and type; 4 === `4` false
    // != Not equal in value; 4 != 5 true
    // !== Not equal in type and value; 4 !== `4` true

    // > greater than
    // >= greater than or equal to
    // < less than
    // <= less than or equal to

// VARIABLES:

    // Never use var, instead, always use let;
    // You can declare multiple variables in one line;
    // let variables can be changed later;
    // Can declare a variable globally (outside the function), and then
    // change the variable within the function
    let testRun = "Code Up", number = 23;
    console.log(testRun)
    console.log(number)
    // const on the other hand cannot be reassigned

    // WORKING W/ DATA TYPES, OPERATORS, AND VARIABLES:
    // Shorthand Operators
    // += ; x = x + x
    // -= ;
    // *= ;
    // /= ;
    // %= ;

console.log(dollaDolla(42))

console.log(formatterr(90))










//Function Drills
//
// Functions using conditionals but not loops or arrays:
//
// - Make a function named `isOdd(number)`
const isOdd = (number) => {
        return parseFloat(number) % 2 !== 0;
};

// - Make a function named `isEven(number)`

const isEven = (number) => {
    return parseFloat(number) % 2 == 0;
}

// - Make a function named `identity(input)` that returns the input exactly as
//   provided.

const identity = (input) => {
    return input;
}

// - Make a function named `isFive(input)`

const isFive = (input) => {
    return input === 5;
}

// - Make a function named `addFive(input)` that adds five to some input.

const addFive = (input) => {
    return input + 5;
}

// - Make a function named `isMultipleOfFive(input)`

const isMultipleOfFive = (input) => {
    return (input) % 5 == 0;
}

// - Make a function named `isThree(input)`

const isThree = (input) => {
    return input === 3;
}

// - Make a function named `isMultipleOfThree(input)`

const isMultipleOfThree = (input) => {
    return (input) % 3 ==0;
}

// - Make a function named `isMultipleOfThreeAndFive(input)`

const isMultipleOfThreeAndFive = (input) => {
    return (input) % 3  === 0 || (input) % 5 === 0;
}

// - Make a function named `isMultipleOf(target, n)` which checks if target is
//   evenly divisible by `n`

const isMultipleOf = (input, n) => {
    return (input) % n === 0;
}

// - Make a function named `isTrue(boolean)`

const isTrue = (boolean) => {
    return true;
}

// - Make a function named `isFalse(boolean)`

const isFalse = (boolean) => {
    return false;
}

// - Make a function named `isTruthy(input)`, remember that values other than true
//   will behave like true

const isTruthy = (input) => {
    return true;
}

// - Make a function named `isFalsy(input)`, remember that values other than false
//   behave like false

const isFalsy = (input) => {
    return false;
}

// - Make a function named `isVowel(letter)`

const isVowel = (letter) => {
    return letter === ("a"||"e"||"i"||"o"||"u")
}

// - Make a function named `isConsonant(letter)`

const isConsonant = (letter) => {
    return letter !== ("a"||"e"||"i"||"o"||"u")
}

// - Make a function named `isCapital(letter)`

const isCapital = (letter) => {
    return letter === letter.toUpperCase();
}

// - Make a function named `isLowerCase(letter)`

const isLowerCase = (letter) => {
    return letter === letter.toLowerCase();
}

// - Make a function named `hasLowerCase(string)` that returns if a string has any
//   lower cased letter

const hasLowerCase = (string) => {
    return string.toUpperCase() != string;
}

// - Make a function named `isSpace(letter)` that returns if a character is a space
//   character

const isSpace = (letter) => {
    return letter === " ";
}

// - Make a function named `isZero(number)`

const isZero = (number) => {
    return number === 0;
}

// - Make a function named `notZero(input)` that returns true if the input is not
//   zero

const notZero = (input) => {
    return input !== 0;
}

// - Write a function named `lowerCase(string)`

const lowerCase = (string) => {
    return string.toLowerCase(string)
}

// - Write a function named `double(n)` that returns a number times two

const double = (number) => {
    return number * 2;
}

// - Write a function named `triple(n)` that returns a number times 3

const triple = (number) => {
    return number * 3;
}

// - Write a function named `quadruple(n)` that returns a number times 4

const quadruple = (number) => {
    return number * 4;
}

// - Write a function named `half(n)` that returns 1/2 of the provided input

const half = (number) => {
    return number / 2
}

// - Write a function named `subtract(a, b)` that returns `a` minus `b`

const subtract = (input1,input2) => {
    return input1 - input2;
}

// - Write a function named `multiply(a, b)` that returns the product of `a` times
//   `b`

const multiply = (number1, number2) => {
    return number1 * number2;
}

// - Write a function named divide(a, b) that returns `a` divided by ~b~

const divide = (number1,number2) => {
    return number1 / number2;
}

// - Write a function named `remainder(a, b)` that returns the remainder after
//   dividing a by b

const remainder = (a,b) => {
    return a % b;
}

// - Make a function named `modulo(a, b)` that returns the returns the remainder
//   after dividing a by b

const modulo = (a,b) => {
    return a % b;
}

// - Write a function named `cube(n)` that returns n * n * n

const cube = (n) => {
    return n * n * n;
}

// - Write a function named `squareRoot(n)` that returns the square root of the
//   input

const squareRoot = (number) => {
    return Math.sqrt(number);
}

// - Write a function named `cubeRoot(n)` that returns the cube root of the input

const cubeRoot = (number) => {
    return Math.cbrt(number);
}

// - Write a function named `invertSign(number)` that returns a negative version of
//   a postive number, a positve version of negative, and false for all else.

const invertSign = (number) => {
    if (number) {
        return number * -1;
    } else {
        return false;
    }
}

// - Write a function named `degreesToRadians(number)`

const degreesToRadians = (number) => {
    return number * (Math.PI / 180);
}

// - Write a function named `radiansToDegrees(number)`

const radiansToDegrees = (number) => {
    return number * (180 / Math.PI);
}

// - Make a function named `isBlank(input)` that determines if a given input is
//   spaces, newline characters, or tabs.

const isBlank = (input) => {
    return input.trim().length === 0;
}

// - Make a function named `trim(string)` that removes empty spaces before and
//   after the input.

const trim = (input) => {
    return input.trim();
}

// - Make a function named `areEqual(input1, input2)` that returns if both inputs
//   have the same value

const areEqual = (input1,input2) => {
    return input1 == input2;
}

// - Make a function named `areIdentical(input1, input2)` that returns if both
//   inputs are same value and data type.

const areIdentical = (input1,input2) => {
    return input1 === input2;
}

// - Make a function named `not(input)` returns the input with a flipped boolean

const not = (input) => {
    if (input === false) {
        return true;
    } else if (input === true) {
        return false;
    } else {
        console.log(`Please input a boolean value.`)
    }
}

// - Make a function named `notNot(input)` that the negation of the negation of the
//   input.

const notNot = (input) => {
    return !!input;
}

// - Make a function named `and(predicate1, predicate2)` that returns the logical
//   operation of AND

const and = (predicate1, predicate2) => {
    return predicate1 && predicate2
}

// - Make a function named `or(predicate1, predicate2)` that returns the logical
//   operation of OR

const or = (predicate1,predicate2) => {
    return predicate1 || predicate2;
}

// - Write a function called `reverseString(string)` that reverses a string

const reverseString = (string) => {
    let splitString = string.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("")
    return joinArray
}

// - Make a function named `absoluteValue(number)` that returns the absolute value
//   of a number.

const absoluteValue = (number) => {
    return Math.abs(number);
}

// - Make a function named `rollDice(sides)` that takes in an argument containing
//   the number of sides the die should have. Generate a random number between 1 up
//   to and including the number of sides.

const rollDice = (sides) => {
    return randomNumber(1,sides);
}














// })();