$(document).ready(function () {
    var rainChars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var char = rainChars.charAt(Math.floor(Math.random() * rainChars.length));

    var paddingSlide = 0;
    var paddingChar = 0;
    
    function slideShow(){
        $("#slowslide").offset({left: paddingSlide});

        paddingSlide++;

        if(paddingSlide > 500){
            paddingSlide = 0;
        }
    };

    function rndChar(){
        document.getElementById("rndchar").innerHTML = char;
        $("#rndchar").offset({top: paddingChar});

        paddingChar++;
        
        if(paddingChar > 250){
            paddingChar = 0;
            char = rainChars.charAt(Math.floor(Math.random() * rainChars.length));
        }
    };

    setInterval(slideShow, 30);
    setInterval(rndChar, 30);
});