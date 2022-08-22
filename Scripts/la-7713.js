$(document).ready(function(){
    $("tbody tr").addClass("colored");

    $("tbody tr").hover(function(){
        $(this).addClass("mouseon");
    }, function(){
        $(this).removeClass("mouseon");
    });
});