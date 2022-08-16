$(document).ready(function () {

    $('.small_box_product').slick({
    centerMode: true,
    centerPadding: '250px',
    slidesToShow: 2.5,
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '60px',
                slidesToShow:  1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 1
            }
        }
    ],
    prevArrow:"<img class='a-left control-c prev slick-prev' src='./assets/img/prev_btn.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='./assets/img/next_btn.png'>"
    });
    
    

    $('.detail_testi').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 2.3,
        autoplay: true,
        autoplaySpeed: 2000,
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

    $('.image').slick({
        prevArrow:".slick-prev-article",
        nextArrow:".slick-next-article"
    });

})

