$(document).ready(function(){
    // CSS
    $("#content").css("margin", "0 auto");
    $("#content").css("width", "55%");
    $("main").css("margin-left", "20px");
    $("#headerarea").css("margin", "20px");
    $("#mainarea").css("color", "#0769AA");
    $("#mainarea").css("font-size", "15px");
    $("#footerarea").css("font-weight", "bold");

    // Function
    $("#headerarea img").click(function(){
        $(this).css("border", "4px solid #0769AA");
        $("#mainarea").css("font-size", "25px");
        document.getElementById("footerelement").innerHTML = "Doppelklick verkleinert wieder ...";
    });

    $("#headerarea img").dblclick(function(){
        $(this).css("border", "none");
        $("#mainarea").css("font-size", "15px");
        document.getElementById("footerelement").innerHTML = "Klicke auf das Logo";
    });
})