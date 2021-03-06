(function($) {
    $(function() {

        var agSwiper = $('.swiper-container');

        if (agSwiper.length > 0) {

            var sliderView = 1;
            var ww = $(window).width();
            if (ww >= 1700) sliderView = 3;
            if (ww <= 1700) sliderView = 3;
            if (ww <= 1560) sliderView = 3;
            if (ww <= 800) sliderView = 1;
            if (ww <= 420) sliderView = 1;

            var swiper = new Swiper('.swiper-container', {
                slidesPerView: sliderView,
                spaceBetween: 0,
                loop: true,
                loopedSlides: 16,
                speed: 300,
               
                autoplayDisableOnInteraction: true,
                centeredSlides: true
            });

            $(window).resize(function() {
                var ww = $(window).width();
                if (ww >= 1700) swiper.params.slidesPerView = 3;
                if (ww <= 1700) swiper.params.slidesPerView = 3;
                if (ww <= 1560) swiper.params.slidesPerView = 3;
                if (ww <= 800) swiper.params.slidesPerView = 1;
                if (ww <= 420) swiper.params.slidesPerView = 1;
            });

            $(window).trigger('resize');

            var mySwiper = document.querySelector('.swiper-container').swiper;

            
            agSwiper.mouseleave(function() {
                mySwiper.autoplay.start();
                
            });
        }

    });
})(jQuery);