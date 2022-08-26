$(document).ready(function () {


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
})