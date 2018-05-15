$(document).ready(function() {
  $.fn.makeRed = function(){
    $(this).css("color",  "#f00");
    return $(this);
  }
  $(".red").makeRed();
});
