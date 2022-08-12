$(document).ready(function () {

    // $('.small_box_product').slick({
    // centerMode: true,
    // centerPadding: '60px',
    // slidesToShow: 3.3,
    // responsive: [
    //     {
    //     breakpoint: 768,
    //     settings: {
    //         arrows: false,
    //         centerMode: true,
    //         centerPadding: '40px',
    //         slidesToShow: 3
    //     }
    //     },
    //     {
    //     breakpoint: 480,
    //     settings: {
    //         arrows: false,
    //         centerMode: true,
    //         centerPadding: '40px',
    //         slidesToShow: 1
    //     }
    //     }
    // ]
    // });  

    var swiper = new Swiper(".list_product", {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        loop:true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    $('.detail_testi').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 2.35,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
        }); 

})

