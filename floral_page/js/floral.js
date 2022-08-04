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
        slidesToScroll: 1,
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
        currentNumber += 10;
        callback(currentNumber)
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    animateNumber(3000, 0.00001, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('package-sold-number').innerText = formattedNumber
    })
    
    animateNumber(5000, 0.00001, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('bouquet-sold-number').innerText = formattedNumber
    })
    
    animateNumber(7000, 0.00001, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('happy-clients-number').innerText = formattedNumber
    })

    animateNumber(10, 3000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('year-of-exp-number').innerText = formattedNumber
    })
  })

$(document).ready(function(){
  $(".love_icon").click(function() {
      if ($(this).hasClass("fa-regular")) {
          $(this).removeClass("fa-regular");
          $(this).addClass("fa-solid").css("color","red");
      } else {
          $(this).removeClass("fa-solid");
          $(this).addClass("fa-regular").css("color","black");
      }
  });

  $(".fa-circle-play").click(function() {
    $(".fa-circle-play").hide();
    $(".video-how-to").trigger('play');
    $('.video-how-to').attr('controls',true);
  })
});
var setTotalNumberOfWordCounter = 200;
function displayWordCounter(){
var getTextValue = document.frm.dd_fc_comment.value;  // Get input textarea value
var getTextLength = getTextValue.length;   // Get length of input textarea value
if(getTextLength > setTotalNumberOfWordCounter){     //compare this length with total count
        getTextValue = getTextValue.substring(0,setTotalNumberOfWordCounter);
        document.frm.dd_fc_comment.value =getTextValue;
        return false;
}
document.frm.totalWordLimit.value = (setTotalNumberOfWordCounter-getTextLength);
  
}