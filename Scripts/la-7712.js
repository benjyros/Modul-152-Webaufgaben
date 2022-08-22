$(document).ready(function(){
  $(".lead").click(function(){
    console.log("Auf den p-Container wurde geklickt!");
  });

  $(".lead").hover(function(){
    console.log("Über dem p-Container befindet sich der Mauszeiger");
  });
});