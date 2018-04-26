$(function() {
   

//select item with class navbar-toggler on click event toggle class change
$('.navbar-toggler').on('click',function(e){

$('.navbar-toggler').toggleClass('change');


});

// add a padding class on scroll on a specific position and also add class top-fixed which make the menu bar sticky.

$(window).scroll(function(){

    let screenPosition = $(this).scrollTop();
        if(screenPosition>=41.4){

            $('.navbar').addClass('navbar-background');
            $('.navbar').addClass('fixed-top');


        } else{
            $('.navbar').removeClass('navbar-background');
            $('.navbar').removeClass('fixed-top');

        }

    
   


});


// // Smooth scroll from menu to section, so fist select menu link on click preventDefault and then put value of this link attr href to some varaible and then animate and scrolltop body and html to that href 

$(".nav-item a").on('click', function(e) {

    e.preventDefault();

    let target = $(this).attr('href');
    console.log(target);

    $('html, body').stop().animate({
            scrollTop: $(target).offset().top
          }, 600);
    
    
  });




});
