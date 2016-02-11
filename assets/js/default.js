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
  
});
