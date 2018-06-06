function mostrarVerde(){
    document.getElementById("imagen_mostrar").src = "img/verde.jpg";
}
function mostrarRojo(){
    document.getElementById("imagen_mostrar").src = "img/rojo.jpg";
}
function mostrarAzul(){
    document.getElementById("imagen_mostrar").src = "img/azul.jpg";
}
function mostrarImg1(){
    $("#img1").css("display", "block");
    $("#oculta1").css("display", "block");
    $("#muestra1").css("display", "none");
}
function mostrarImg2(){
    $("#img2").css("display", "block");
    $("#oculta2").css("display", "block");
    $("#muestra2").css("display", "none");
}
function mostrarImg3(){
    $("#img3").css("display", "block");
    $("#oculta3").css("display", "block");
    $("#muestra3").css("display", "none");
}
function desapareceImg1(){
    $("#img1").css("display", "none");
    $("#muestra1").css("display", "block");
    $("#oculta1").css("display", "none");
}
function desapareceImg2(){
    $("#img2").css("display", "none");
    $("#muestra2").css("display", "block");
    $("#oculta2").css("display", "none");
}
function desapareceImg3(){
    $("#img3").css("display", "none");
    $("#muestra3").css("display", "block");
    $("#oculta3").css("display", "none");
}

