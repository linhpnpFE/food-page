const click_sidebar = document.querySelector(".js-open-sidebar");
const sidebar_overlay = document.querySelector(".js-sidebar-overlay");
const close_sidebar = document.querySelector(".js-sidebar-close");

function showSidebar() {
  sidebar_overlay.classList.add("open");
}

function hideSidebar() {
  sidebar_overlay.classList.remove("open");
}

click_sidebar.addEventListener("click", showSidebar);
close_sidebar.addEventListener("click", hideSidebar);
var swiper = new Swiper(".mySwiper", {
  // autoplay:{
  //     delay: 2000,
  //     disableOnInteraction: false,
  // },
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    //   type: "fraction",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var appendNumber = 4;
var prependNumber = 1;
document
  .querySelector(".prepend-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  });
document
  .querySelector(".prepend-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  });
document
  .querySelector(".append-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  });
document
  .querySelector(".append-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  });