$(document).ready(function () {

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
    
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
    
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(window).on('resize scroll', function() {
        if ($('.block_our_product').isInViewport()) {

            $(".title_text").each(function() {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.attr('data-stop') } , 
                {
                    duration: 1000,
                    easing: 'swing',
                    step: function (now) {
                        $this.text(Math.ceil(now)+ "+");
                    }
                });
            });
        
        }
    });

    
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
    prevArrow:"<img class='a-left control-c prev slick-prev' src='../assets/img/prev_btn.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='../assets/img/next_btn.png'>"
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
                    slidesToShow: 1,
                    autoplay:true,
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
        nextArrow:".slick-next-article",
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    autoplay:true,
                }
            },
        ]

    });

})

