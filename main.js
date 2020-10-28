$(document).ready(function() {


   //  // menu-funz------------
   //  $('.menu-funz').mouseenter(function() {
   //     $('.dropdown-menu-funz').addClass('active');
   // });
   //
   // $('.dropdown-menu-funz').mouseleave(function() {
   //     $('.dropdown-menu-funz').removeClass('active');
   // });
   //
   //
   //  // menu-abb------------
   //  $('.menu-abb').mouseenter(function() {
   //     $('.dropdown-menu-abb').addClass('active');
   // });
   //
   // $('.dropdown-menu-abb').mouseleave(function() {
   //     $('.dropdown-menu-abb').removeClass('active');
   // });
   //
   //
   //  // menu-chisiamo------------
   //  $('.menu-chisiamo').mouseenter(function() {
   //     $('.dropdown-menu-chisiamo').addClass('active');
   // });
   //
   // $('.dropdown-menu-chisiamo').mouseleave(function() {
   //     $('.dropdown-menu-chisiamo').removeClass('active');
   // });
   //
   //  // menu-aiuto------------
   //  $('.menu-aiuto').mouseenter(function() {
   //     $('.dropdown-menu-aiuto').addClass('active');
   // });
   //
   // $('.dropdown-menu-aiuto').mouseleave(function() {
   //     $('.dropdown-menu-aiuto').removeClass('active');
   // });

   // Soluzione 2-----------------------
   $('.menu-funz').click(function() {
       $('.dropdown-menu-funz').toggleClass('active');
   });

   $('.menu-abb').click(function() {
       $('.dropdown-menu-abb').toggleClass('active');
   });

   $('.menu-chisiamo').click(function() {
       $('.dropdown-menu-chisiamo').toggleClass('active');
   });

   $('.menu-aiuto').click(function() {
       $('.dropdown-menu-aiuto').toggleClass('active');
   });

});
