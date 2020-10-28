$(document).ready(function() {


    // Soluzione 1--------------------
    $('.menu-app').mouseenter(function() {
        $('.dropdown-menu.active').removeClass('active');
        $(this).next(".dropdown-menu").addClass('active');
   });

   $('.dropdown-menu').mouseleave(function() {
       $(this).removeClass('active');
   });

   // // Soluzione 2-----------------------
   // $('.menu-app').click(function() {
   //     $(this).next(".dropdown-menu").toggleClass('active');
   // });

   // Click hambuger menu
   $('.header-right .fa-bars').click(function() {
       $(".menu-hamburger").toggleClass("active");
   });



});
