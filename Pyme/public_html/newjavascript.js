$(document).ready(function(){
    var pregunta1 = "¿Por qué adherirse al Registro MIPyME?";
    var pregunta2 = "¿Cómo adherirse al Registro MIPyME?";
    var pregunta3 = "¿Qué es el Certificado MiPyME?";
    var pregunta4 = "¿Cómo Recategorizo a mi PyME?";
    $("#box1").hover(function(){
        $("p.intro").replaceWith('<p class="intro">' + pregunta1 + '</p>');
        $("#texto1").css("display","flex");
        $("#texto2").css("display","none");
        $("#texto3").css("display","none");
        $("#texto4").css("display","none");
    });
    $("#box2").hover(function(){
        $("p.intro").replaceWith('<p class="intro">' + pregunta2 + '</p>');
        $("#texto1").css("display","none");
        $("#texto2").css("display","flex");
        $("#texto3").css("display","none");
        $("#texto4").css("display","none");
    });
    $("#box3").hover(function(){
        $("p.intro").replaceWith('<p class="intro">' + pregunta3 + '</p>');
        $("#texto1").css("display","none");
        $("#texto2").css("display","none");
        $("#texto3").css("display","flex");
        $("#texto4").css("display","none");
    });
    $("#box4").hover(function(){
        $("p.intro").replaceWith('<p class="intro">' + pregunta4 + '</p>');
        $("#texto1").css("display","none");
        $("#texto2").css("display","none");
        $("#texto3").css("display","none");
        $("#texto4").css("display","flex");
    });
});