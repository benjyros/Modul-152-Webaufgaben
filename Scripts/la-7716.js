$(document).ready(function(){
    var mousePos = { x: -1, y: -1 };
    var clicks = 0;

    $("#hoverArea").mousemove(function(event){
        mousePos.x = Math.round(event.pageX - $(this).offset().left);
        mousePos.y = Math.round(event.pageY - $(this).offset().top);
        document.getElementById("outputPos").innerHTML = "pageX: " + mousePos.x + ", pageY: " + mousePos.y;
    });

    $("#imgClick").click(function(event){
        clicks++;
        mousePos.x = Math.round(event.pageX - $(this).offset().left);
        mousePos.y = Math.round(event.pageY - $(this).offset().top);
        document.getElementById("outputClick").innerHTML = "Der Klick X ist " + mousePos.x + " der Klick Y ist " + mousePos.y + ". Sie haben " + clicks + " auf das Bild geklick";
    });
});