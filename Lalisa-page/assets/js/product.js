$(document).ready(function(){
  $('.banner_list_product').slick({
    prevArrow:"<img class='a-left control-c prev slick-prev' src='../assets/img/prev_btn.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='../assets/img/next_btn.png'>",
    responsive: [
      {
          breakpoint: 1199,
          settings: {
              arrows: false,
              autoplay:true,
          }
      },
    ]
  });

})