$(document).ready(function(){
    $("#open_button").click(function(){
        $("#mySidenav").css("width","320px");
        $(".cover_body").css({
            "display":"block",
            "transition":"0.5s",
        });
        $("body").css({"transition":"0.5s","overflow-y":"hidden"})
    });

    $("main,.close_icon").click(function(){
        $("#mySidenav").css("width","0%");
        $(".cover_body").css({"display":"none"});
        $("body").css({"overflow-y":"unset"})
    })
});
