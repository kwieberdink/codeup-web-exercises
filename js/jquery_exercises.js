
// window.onload = alert('The DOM has finished loading');
// you can stack multiple functions inside of the click function

// $("#code").click(function(){
//     alert('CODEUP IS TOP DAWG');
//     $(this).next().slideToggle(500);
// });
//
// $(".fruit").click(function(){
//     alert('Eat your fruit');
// });

// Applying CSS to an individual class
// Use a comma to separate the CSS styles
// Make sure quotes are used on both the content and the title
// $(".codeup").css({
//     'border': '1px solid red',
//     'width': 'fit-content',
//     'padding': '4px',
//     'border-radius': '5px',
//     'margin-bottom': '3px'
// });

// Change css of the li
$("li").css({
   'font-size': '20px'
});

// add a background color to all elements, hightlighted
// $("h1, p, li").css({
//     'background-color': '#FFFF00',
// })

// Display inner text of the element into an alert when clicked on
$("h1").click(function(){
    alert($("h1").text());
});

$("h1").click(function(){
    $("h1").css({
        'background-color': 'red'
    });
});

$("p").dblclick(function(){
    $("p").css({
        'font-size': '18px'
    });
});


// Syntax for hover: $( selector ) .hover ( handlerIn, handlerOut )
$("li").hover(
    function(){
        $(this).css('color', 'red');
    },
    function(){
        $(this).css('color', 'black');
    }
);