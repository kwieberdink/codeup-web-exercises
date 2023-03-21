$('.box').on('click', function (){
    // hide the boxes in the other container
   $(this)
       .parents('.container')
       .siblings('.container')
       .find('.box')
       .fadeToggle(1000)
});

// crawling up the DOM
$('#box1').parents('.container');

// crawl down the DOM
$('#box1').find();
$('#box1').children();

// crawl sideways on the DOM
$('#box1').siblings();

// utility methods
$('#box1').closest();