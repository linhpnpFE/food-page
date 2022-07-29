// dropdown list infor_page
var flip = 0, flip_2 = 0, flip_3 = 0, flip_4 = 0;
    $( '.dropdown-choose-1' ).click(function() {
      $( '.paragraph-one').toggle(flip++ % 2 === 0);
    });

    $( '.dropdown-choose-2' ).click(function() {
      $( '.paragraph-two').toggle(flip_2++ % 2 === 0);
    });

    $( '.dropdown-choose-3' ).click(function() {
      $( '.paragraph-three').toggle(flip_3++ % 2 === 0);
    });

    $( '.dropdown-choose-4' ).click(function() {
      $( '.paragraph-four').toggle(flip_4++ % 2 === 0);
    });
