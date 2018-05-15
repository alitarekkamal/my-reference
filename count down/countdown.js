$(document).ready(function(){
  $(function(){
    var conterdown = setInterval(function(){
      var counter = parseInt($(".countdown").html());
      if(counter !== 0){
        $(".countdown").html(counter - 1);
      }else{
        clearInterval(conterdown);
        $(".countdown").html("FINISHED");
      }
    },100);
  });
});
