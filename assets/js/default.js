$(document).ready(function() {

  // makes navbar fixed when banner above disappeared
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the
      //nav bar to stick.
      // console.log($(window).scrollTop());
    if ($(window).scrollTop() > 200) {
      $('.navbar').addClass('navbar-fixed-top');
    }
    if ($(window).scrollTop() < 201) {
      $('.navbar').removeClass('navbar-fixed-top');
    }
  });

  //dropdown parent item link in navbar is also clickable
  jQuery(function($) {
    $('.navbar .dropdown').hover(function() {
    $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();

    }, function() {
    $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();

    });

    $('.navbar .dropdown > a').click(function(){
    location.href = this.href;
    });
  });

  // toggle active class on navbar items
  $(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
  });



});
