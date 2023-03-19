// Adds a click event listener to all 'h3' elements in the HTML. When clicked, the function is executed
// Finds the next element after the clicked 'h3' (<p>), using the 'next( )' method, and then applies the 'slideToggle( )' method to that element
// 'slideToggle( )' is animation method that slides element up or down, while the '500' parameter specifies the duration of the animation in milliseconds

// We can (and usually do) use '$' as shorthand for calling the jQuery function
$("h3").click(function(){
    $(this).next().slideToggle(500);
});

// If we ask our JS to access DOM elements but those elements have not loaded yet, then our JS cannot access them. To avoid, ask our JS to wait until the page has loaded. . . .

// We can do this with the vanilla JS window.onload event

// function init() {
//     jQuery("h3").click(function(){
//         $(this).next().slideToggle(500);
//     });
// }
//
// window.onload = init;

// or we can use the $(document.ready)
$(document).ready(function() {
    function init() {
        $("h3").click(function () {
            $(this).next().slideToggle(500);
        });
    }
    // jQuery selectors use css selectors syntax
    // $("#library").text("jQuery is a JavaScript Library"); // Sets the text

    // get a reference to the element with the id of library
    // using a jQuery selector
    // and storing it in a variable
    // I use the $ to make this as a reference to a jQuery object
    // as opposed to a reference to a JS DOM node
    const $libraryReference = $('#library')
    // this is jQuery equivalent to
    const libraryReferenceJS = document.querySelector("#library")
    // use the reference to get the innerText of the  element
    let libraryText = $("#library").text();
    // output the innerText of the element to the console
    console.log(libraryText)
    // change the innerText of the element on the page
    $libraryReference.text(libraryText + " is library")

    // jQuery class selector with the .css method
    // to change the css of the selected element(s)
    // $(".framework").css('border", "1px solid black");
    // to change more than one css property at a time
    $(".framework").css({
        'border': '1px solid black',
        'width': 'fit-content',
        'padding': '4px',
        'border-radius': '5px',
        'margin-bottom': '3px'
    });
    // $("p, li").text("jQuery takes over").css("color", "hotpink");
});
