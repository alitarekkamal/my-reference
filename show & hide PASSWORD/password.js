$(document).ready(function(){
  $(".change").click(function(){
    $(this).toggleClass("active");
    if($(this).hasClass("active")){
      $(this).prev("input").attr("type", "text");
      $(this).html("hide password");
    }else{
      $(this).prev("input").attr("type", "password");
      $(this).html("show password");
    }
  });
});
