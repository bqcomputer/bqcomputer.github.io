// AOS
AOS.init();

// NAVBAR
$(window).scroll(function () {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 50);
});
