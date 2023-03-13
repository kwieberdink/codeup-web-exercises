"use strict"

let count = 0;
let max = 10;
let interval = 1000;

let intervalid = setInterval(function() {
    console.log('Console logging every second')
}, interval);

// clearInterval(intervalid); clear interval can be used to stop an interval in it's tracks

        // let intervalid = setInterval(function() { //starting interval with given condition
        //     if (count >= max) { //if true, stop the timer when reaching a certain point
        //         clearInterval(intervalid);
        //         console.log('All Done!');
        //     } else {
        //         count++;
        //         console.log('Repeating this line ' + count);
        //     }
        // }, interval);

//selfTimeout ( function )

        // console.log(' 5 seconds starts now!'); // showing the start of the timer
        // setTimeout(function(){ // uses a set function to display a message after a certain amount of time
        //     console.log("It's been 5 seconds!");
        // }, 5000)