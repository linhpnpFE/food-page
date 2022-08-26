var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
      centeredSlides: true,
      centeredSlidesBounds : true,
      loop : true,
      slideToClickedSlide: true,
      spaceBetween: 40,
    });
    
var swiper = new Swiper(".mySwiper1", {
        slidesPerView: 2,
        centeredSlides: true,
        centeredSlidesBounds : true,
        loop : true,
        slideToClickedSlide: true
});

var swiper = new Swiper(".mySwiper2", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper3", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
