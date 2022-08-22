$(document).ready(function(){
    $(".navitem").hover(function(){
        $(this).css("font-weight", "bold");
    }, function(){
        $(this).css("font-weight", "normal");
    });
});