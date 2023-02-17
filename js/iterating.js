(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    // let namesStudents = ["Damian","Quintyn","Kaeden","Isaac"]

    // TEACH EXAMPLE

    // const names = ["Jason","Javier","Justin","Jeremy"];


    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    // let numberOfNames = namesStudents.length;
    // console.log(`The number of names in the array is => `,numberOfNames);

    // TEACH EXAMPLE:

    // console.log(`Number of elements in names => `, names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    // namesStudents.forEach((student)=> {
    //     console.log(student)
    // })

    // TEACH EXAMPLE:

    // console.log(names[0]);
    // console.log(names[1]);
    // console.log(names[2]);
    // console.log(names[3]);


    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    // for (let i = 0; i < namesStudents.length; i++) {
    //     let name = namesStudents [i];
    //     console.log(name)
    // }

    // TEACH EXAMPLE:

    // for (let i = 0; i < names.length; i++) {
    //     console.log(names[i])
    // };


    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    // for (let i = 0; i < namesStudents.length; i++) {
    //     let name = namesStudents [i];
    //     console.log(name)
    // }

    // namesStudents.forEach((name) => {
    //     console.log(`${name}`);
    // });

    // TEACH EXAMPLE:

    // names.forEach (function(name) {
    //     console.log(name)
    // });


    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */


    // const returnFirst = (array) => {
    //   return array[0];
    // };

    // console.log(returnFirst(names))

    // const returnSecond = (array) => {
    //     return array [1];
    // };

    // console.log(returnSecond(names));
    //
    // const returnThird = (array) => {
    //     const arrayLength = array.length;
    //     return array[arrayLength-1]
    // };
    // console.log(returnThird(names));

})();