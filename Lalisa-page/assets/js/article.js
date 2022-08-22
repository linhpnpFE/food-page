$(document).ready(function(){
    $('.list_article').slick({
        prevArrow:"<img class='a-left control-c prev slick-prev' src='../assets/img/prev_btn.png'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='../assets/img/next_btn.png'>",
        responsive: [ {
            breakpoint: 1200,
            settings: {
                arrows: false,
                auto:true,
            },
        }],
    });
})