$(document).ready(function(){
    $("#open_button").click(function(){
        $("#mySidenav").css("width","320px");
        $("body").css({"background-color":"rgba(0,0,0,0.4)","transition":"0.5s","overflow-y":"hidden"})
    });

    $("main,.close_icon").click(function(){
        $("#mySidenav").css("width","0%");
        $("body").css({"background-color":"white","transition": "0.5s","overflow-y":"unset"})
    })
});
