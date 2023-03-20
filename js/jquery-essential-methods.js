
// jQuery Selector
// # Means we are hitting an ID
// while . (period) means we are hitting a class
// Dollar sign before a function, does not affect the function
// It helps determine the difference between jQuery functions and JS functions
        let $jQueryParent = $('#paragraphParent');

// I cannot do THIS with jQuery!
    // jQueryParent.style.color = 'red'; // <-----------

// Vanilla Javascript Equivalent
let vanillaParent = document.querySelector('#paragraphParent');

// //  changing one css property
// $jQueryParent.css('color','red')
//
// // OR change a bunch of them!
// $jQueryParent.css({
//     'fontWeight': '600',
//     'textTransform': 'uppercase',
//     'fontStyle': 'italic'
// });
//
// // adding classes with jQuery
// $jQueryParent.addClass('highlight');

// getting more than one element, you cana run the same methods
let $paragraphs = $('p');

$paragraphs.css('color', 'blue')

// Vanilla JavaScript
let paragraphs = document.querySelectorAll('p');
paragraphs.forEach(function(element){
    element.style.color = 'blue';

    element.setAttribute('data-name','value');
    let paragraphValue = element.getAttribute('data-name');
});

$paragraphs.attr('data-name2', 'really anything');
let newParaValue = $paragraphs.attr('data-name2');

$paragraphs.text('This is the new text inside this element!');
let paraText = $paragraphs.text();
console.log(paraText);

// adding a class to elements
$paragraphs.addClass('highlight');

// removing a class from elements
$paragraphs.removeClass('highlight');

// // Fades out over a given interval
// $paragraphs.on('click', function(){
//     // $(this).toggleClass('highlight');
//     $(this).fadeOut(3000);
// });

// // Fades in and fades out over a given interval
// $paragraphs.on('click', function(){
//     $(this).fadeOut(1000, function(){
//         $(this).fadeIn(1000)
//     })
// });

// // When clicking on the paragraph, it makes the <p> disappear
// $paragraphs.on('click', function(){
//     $(this).hide()
// });

$paragraphs.on('click', function(){
    $(this).animate({
        opacity: 0.25
    }, 3000, function(){
        // Animation complete.
    });
});

