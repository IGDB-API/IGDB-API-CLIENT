'use strict';


/////scroll up button/////
$(function hideScroll() {
    $('.scroll-top').hide();
});
$(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
        $('.scroll-top').fadeIn();
    }
    else {
        $('.scroll-top').fadeOut();
    }
});


$('.scroll-top').on('click', function (e) {
    e.preventDefault();
    $('body,html').animate({
        scrollTop: 0
    }, 800);
})
/////scroll up button end here/////

/////highlight active menu/////
$(function hightLight() {
    $('#navbar').on('click', 'li', function () {
        $('#navbar ul li').removeClass("active");
        $(this).addClass("active");

    });

});
/////highlight active menu end here/////


/////table sorter/////
// $(function() {
//     $("#deals-table").tablesorter();
//   });
function doIt() {
    $("#deals-table").tablesorter();
}


/////table sorter end here /////