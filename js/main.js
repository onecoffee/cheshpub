


$("body").backstretch([
              "bg1.jpg",
              "bg2.jpg"
              ], {
                fade: 750,
                duration: 5000
            });

var winHeight = $(window).height();
var winWidth = $(window).width();

// Задаем высоту дива


$('footer').width($(window).width() - 170);
$('header').width($(window).width() - 170);
$('section').height($(window).height() - 67);
$('#menu_container').height($(window).height() - 67);
$('#menu_list').height($(window).height() - 67);
$('#menu_positions').height($(window).height() - 67);
$('#first_col').height($(window).height() - 67);
$('#second_col').height($(window).height() - 67);
$('#pivnoff_adresses_block').height($(window).height() - 608);


$(window).resize(function() {
    $('header').width($(window).width() - 170);
    $('footer').width($(window).width() - 170);
    $('section').height($(window).height() - 67);
    $('#menu_container').height($(window).height() - 67);
    $('#menu_list').height($(window).height() - 67);
    $('#menu_positions').height($(window).height() - 67);
    $('#first_col').height($(window).height() - 67);
    $('#second_col').height($(window).height() - 67);
    $('#pivnoff_adresses_block').height($(window).height() - 608);
});

$(window).trigger('resize');

$(document).ready(function(){
  $('.bxslider').bxSlider({
    auto: true,
    infiniteLoop: true
  });
});


