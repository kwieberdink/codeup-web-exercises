"use strict"

// $(document).keyup(function(event){
//     console.log(event.keyCode);
// });

// .KEYDOWN EXAMPLE
$('#text-field').keydown(function() {
    alert('A key was pushed down!');
});
// .KEYDOWN EXAMPLE END

// .KEYUP() EXAMPLE
// $('#textfield').keyup(function() {
//     alert('a key was released!');
// });
// .KEYUP() EXAMPLE END

// .ON() SYNTAX
//.on('keydown', function() {});

// .OFF() SYNTAX
// $('.clickable').off('click');

// left 37
// up 38
// right 39
// 40 down
// a 65
// b 66


let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
let keyCode = [];

$(document).on ('keyup',(function(event){
    keyCode.push(event.keyCode);
    console.log(konamiCode)
    if (konamiCode.length === keyCode.length && konamiCode.join() === keyCode.join()){
        alert('You have gained 30 lives!')
    }
}));



