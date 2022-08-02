$(document).ready(function() {

    console.log("Hello world !");


    $(".love_icon").click(function() {
        if ($(this).hasClass("far")) {
            $(this).removeClass("far");
            $(this).addClass("fas").css("color","red");
        } else {
            $(this).removeClass("fas");
            $(this).addClass("far").css("color","black");
        }
    });

    $(".fa-play-circle").click(function() {
        $(".fa-play-circle").hide();
        $(".aboutus_pic").trigger('play');
        $('.aboutus_pic').attr('controls',true);
    })


    $(".achive_count").each(function() {
        var $this = $(this);
        $({ Counter: 0 }).animate({ Counter: $this.attr('data-stop') } , 
        {
            duration: 1500,
            easing: 'swing',
            step: function (now) {
                $this.text(Math.ceil(now)+ "+");
            }
        });
    });
})

$(function(){
    new WOW().init(); 
});
