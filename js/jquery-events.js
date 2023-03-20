

$("#create-an-element").click(function(){
    $(this).after("<button class='dynamic'>Click Me</button>");
});

// adding event listeners on dynamically generated elements is different
// this event handler allows the button to generate elements on the page
$("#new-elements").on('click', '.dynamic', function(){
   alert("You clicked me!");
});

// to add event handlers to dynamically  generated elements

document.querySelector("#new-elements").addEventListener('click', function(event){
    if (event.target.className  === "dynamic"){
        alert("You clicked me!")
    }
})

