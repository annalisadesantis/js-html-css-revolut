$(document).ready(function() {


    // menu-abb------------
    $('.menu-abb').mouseenter(function() {
       $('.dropdown-menu-abb').addClass('active');
   });

   $('.dropdown-menu-abb').mouseleave(function() {
       $('.dropdown-menu-abb').removeClass('active');
   });


    // menu-chisiamo------------
    $('.menu-chisiamo').mouseenter(function() {
       $('.dropdown-menu-chisiamo').addClass('active');
   });

   $('.dropdown-menu-chisiamo').mouseleave(function() {
       $('.dropdown-menu-chisiamo').removeClass('active');
   });

    // menu-aiuto------------
    $('.menu-aiuto').mouseenter(function() {
       $('.dropdown-menu-aiuto').addClass('active');
   });

   $('.dropdown-menu-aiuto').mouseleave(function() {
       $('.dropdown-menu-aiuto').removeClass('active');
   });

});
