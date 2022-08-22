$(document).ready(function(){
    $("#gone").click(function(){
      $(this).hide();
    });

    $("#here").click(function(){
      $("#gone").show();
    });
});