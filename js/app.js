// AOS
AOS.init();

// NAVBAR
const nav_toggler = document.querySelector(".header .nav-bar .nav-list .nav-toggler");
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(".header .nav-bar .nav-list ul li a");
const header = document.querySelector(".header.container");

nav_toggler.addEventListener("click", () => {
  nav_toggler.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  let scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    nav_toggler.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

// LEARN
$(".read-button").on("click", function () {
  $(this).parent().toggleClass("showContent");
  let replaceText = $(this).parent().hasClass("showContent") ? "< Sembunyikan" : "Lebih banyak...";
  $(this).text(replaceText);
});
