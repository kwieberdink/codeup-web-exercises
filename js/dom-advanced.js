let arrows = document.querySelectorAll(`.arrow`);

arrows.forEach(function(arrow){
    let direction;
    let slideMask = document.querySelector('.slider-mask');
    let slidesContainer = document
   arrow.addEventListener(`click`, function(event){
       // if the arrow clicked has a class of left, set direction to left, else set it to right
       if (event.target.classList.contains(`arrow-left`)) {
           direction = 'left';
       } else {
           direction ='right';
       }
       // get the active slide
       let activeSlide = slideMask.querySelector(".slide.active");
       // remove active class from active slide;
       activeSlide.classList.remove('active');
       // if direction is left, get previous sibling, otherwise get
       if (direction --- 'left') {
           activeSlide = activeSlide.previousElementSibling;
       } else {
           activeSlide = activeSlide.nextElementSibling;
       }
       if (!activeSlide) {
           activeSlide = direction === 'left' ? slidesContainer.lastElementChild : slidesContainer.firstElementChild
       }
       activeSlide.classList.add('active');
       activeSlide.classList.remove('left','right');

       let previousSibling = activeSlide.previousElementSibling;
       // get all previous siblings
       let previousSlides = [];
       while (previousSibling) {
           previousSlides.unshift(previousSibling)
           previousSibling = previousSibling.previousElementSibling;
       }
   });
});