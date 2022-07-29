$('.respon-slider').slick({
  dots: false,
  infinite: true,
  speed: 200,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
        prevArrow:`<button type='button' class='slick-prev pull-left'><i class="fa-solid fa-arrow-left"></i></button>`,
        nextArrow:`<button type='button' class='slick-next pull-right'><i class="fa-solid fa-arrow-right"></i></button>`,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
        breakpoint: 784,
        settings:{
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

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

function animateNumber(finalNumber, delay, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, delay)
    function updateNumber() {
      if (currentNumber >= finalNumber) {
        clearInterval(interval)
      } else {
        currentNumber++
        callback(currentNumber)
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    animateNumber(3000, 10, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('package-sold-number').innerText = formattedNumber
    })
    
    animateNumber(5000, 5, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('bouquet-sold-number').innerText = formattedNumber
    })
    
    animateNumber(7000, 3, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('happy-clients-number').innerText = formattedNumber
    })

    animateNumber(10, 3000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('year-of-exp-number').innerText = formattedNumber
    })
  })