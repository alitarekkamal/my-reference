$(document).ready(function(){
  $(function(){
    var maxText = $("textarea").attr("maxlength");
    $(".message").html("<span>"+maxText+"</span> Character Remaining...");
    $("textarea").keyup(function(){
      var textLength = $(this).val().length;
      var counter = maxText - textLength;
      $(".message").html("<span>"+counter+"</span> Character Remaining...");
    });
  });
});
