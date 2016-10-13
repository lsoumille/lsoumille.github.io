jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    var words = [
      {text: "Lorem", weight: 13},
      {text: "Ipsum", weight: 10.5},
      {text: "Dolor", weight: 9.4},
      {text: "Sit", weight: 8},
      {text: "Amet", weight: 6.2},
      {text: "Consectetur", weight: 5},
      {text: "Adipiscing", weight: 5},
      /* ... */
    ];
    $('#programming').jQCloud(words, {
  width: 500,
  height: 350
});
    $('.level-bar-inner').css('width', '0');

    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {

            var itemWidth = $(this).data('level');

            $(this).animate({
                width: itemWidth
            }, 800);

        });
    });



});
