$(document).ready(function(){
  $(".link").click(function(e){
    e.preventDefault();
    $("html, body" ).animate({
      scrollTop: $("." + $(this).data("link")).offset().top

    }, 1000)
  })
});
