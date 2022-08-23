$(document).ready(function(){
    $("#open_button").click(function(){
        $("#mySidenav").css("width","50%");
        $("body").css("background-color","rgba(0,0,0,0.4)")
    });

    $("main,.close_icon").click(function(){
        $("#mySidenav").css("width","0%");
        $("body").css("background-color","white")
    })
});
