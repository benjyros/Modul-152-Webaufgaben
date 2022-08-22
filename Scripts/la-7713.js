$(document).ready(function(){
    $("tbody tr").css("background", "#fafad2");

    $("tbody tr td").hover(function(){
        $(this).css("background", "#1e90ff");
    }, function(){
        $(this).css("background", "#fafad2");
    });
});