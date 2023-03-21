// clicking the dt allow the dd to toggle up and down, highlights the dd
$('dt').on('click',function(){
    $(this).next().toggle().css({
        'backgroundColor': 'yellow',
        'color': 'black'
    })
})


// Create a button that, when clicked, makes the last li in each ul have a yellow background

// To target the last child within each 'ul', last-child needs to be placed with the children
$('h2').on('click', function(){
    $('ul').children('li:last-child').toggle().css('backgroundColor', 'yellow')
})


// When any h3 is clicked, the li's underneath it should be bolded. Use font-weight: bold to achieve this

$('h3').on('click', function(){
   $(this).next().css(
       'fontWeight', 'bold'
   )
});

// When any list item is clicked, first li of the parent ul should have a font color of blue

$('li').on('click',function(){
    $(this).parents('ul').children('li:first').css(
        'color','darkblue'
    )
});

$('.swap-btn').on('click', function(){
    let btn = $(this).attr('id');
    let $commonParent = $(this).parents('.row');
    let $images = $commonParent.find('img');
    let imgSources = [];
    $images.each(function(){
        let srcValue = $(this).attr('src');
        imgSources.push(srcValue);
    });
    let firstImage = $images[1];
    console.log($images[0]);
    console.log('Image Source Array =>', imgSources)
    switch(btn){
        case "leftBtn":
            // do the logic for left btn
            $($images[0]).attr('src',imgSources[1]);
            $($images[1]).attr('src',imgSources[0]);
            console.log('clicked left btn')
            break;
        case "middleBtn":
            // do the logic for middle btn
            let randomNum = randomNumber(1,2);
            if (randomNum === 1){
                $($images[1]).attr('src',imgSources[0])
                $($images[0]).attr('src',imgSources[1])
            } else {
                $($images[1]).attr('src',imgSources[2])
                $($images[2]).attr('src',imgSources[1])
            }
            console.log('clicked middle btn')
            break;
        case "rightBtn":
            $($images[2]).attr('src',imgSources[1]);
            $($images[1]).attr('src',imgSources[2]);
            console.log('clicked right btn')
            break;
    }
})

