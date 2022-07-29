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
    })

})

$(function(){
    new WOW().init(); 
});
