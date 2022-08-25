$(document).ready(function () {


    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
    
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
    
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(window).on('resize scroll', function() {
        if ($('.block_mission').isInViewport()) {

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
})