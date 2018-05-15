$(document).ready(function(){
  $.fn.centering = function(){
    $(this).css({
      "position" : "absolute",
      "left" : ($(window).width() - $(this).width())/2,
      "top" : ($(window).height() - $(this).height()) /2
    });
  }
  $(".center").centering();
});
