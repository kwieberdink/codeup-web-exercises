
// let $faqAnswer = $('dd');
// let $faqQuestion = $('dt');
//
// $faqAnswer.attr('id','invisible');
// $faqQuestion.on('click', function(){
//     $('.invisible').css({
//         'visibility': 'visible'
//     })
//     $faqAnswer.attr('class','highlight')
// })
//
// // $faqQuestion.on('click',function(){
// //     $('dd').fadeIn(1000, function(){
// //         $('dd').fadeOut(1000)
// //     })
// // })

// $('button').on('click', function(){
//     $('dd').toggleClass('invisible')
// })

$('dt').on('click',function(){
    $(this).next().fadeToggle();
    $(this).next().css({
        'backgroundColor': 'yellow',
        'color': 'black'
    })
})