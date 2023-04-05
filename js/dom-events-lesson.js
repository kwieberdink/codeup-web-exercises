let pageWrapper = document








// Drop Down #1
// save in utility file
let dropdowns = document.querySelectorAll('[data-dropdown="parent"]')
dropdowns.forEach(function(dropdown){
   let toggle = dropdown.querySelector('[data-drowndown="toggle"]')
    toggle.addEventListener('click', function (){
        dropdowns.forEach(function(element){
            // if already has class of open and is not this element, remove it
            if (element.classList.contains('open') && element !== dropdown) {
                element.classList.remove('open');
            }
        })
        dropdown.classList.toggle('open');
    })
});

pageWrapper.addEventListener('click', function(event) {
    // if the even target is not a dropdown, close all dropdowns
    if (event.target.closest('[data-dropdown="parent"]')) {
        dropdowns.forEach(function(dropdown) {
            dropdown.classList.remove('open');
        });
    }
});