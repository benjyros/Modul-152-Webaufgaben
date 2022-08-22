$(document).ready(function(){
    // CSS
    $("#headerarea").css("padding", "20px");
    $("#mainarea").css("padding-left", "20px");
    $("#mainarea").css("color", "#0769AA");
    $("#mainarea").css("font-size", "15px");
    $("#footerarea").css("font-weight", "bold");
    $("#footerarea").css("padding-left", "20px");

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
});