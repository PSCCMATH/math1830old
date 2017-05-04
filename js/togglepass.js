$(document).ready(function() {
  var u1s1 = "ax3";
  
  // $("#show").click(function() {
  //   $(".m1830-answer").show();
  // });
  $("#submit").click(function() {
     var txtValue = $("#input").val();
    if (txtValue == u1s1) {
      $(".m1830-answer").show();
      $(".m1830-solution").show();
    // $(".Deposit").css('visibility', 'visible');  sample code
    }
  });
});
