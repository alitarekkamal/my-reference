$(document).ready(function(){
  $.fn.centering = function(){
    $(this).css({
      "position" : "absolute",
      "left" : ($(window).width() - $(this).width())/2,
      "top" : ($(window).height() - $(this).height()) /2
    });
  }
  $(".container").centering();
  $(function(){
    (function animate(){
      $(".img").animate({
        "left" : "295px"
      }, 1000, function(){
        $(this).animate({
          "left" : "-100px"
        },1000, function(){
          animate();
        });
      });
    }());
  });
});
