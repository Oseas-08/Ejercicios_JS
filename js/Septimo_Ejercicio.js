$(document).ready(function(){
    $("#asociar").click(function () {
        $("#fila1").css("background-color", "red");
    });

    $("#btnasociar").click(function () {
        $("#fila2").css("background-color", "green");
    });

    $("#desasociar").click(function () {
        $("#fila1").css("background-color", "");
    });

    $("#btndesasociar").click(function () {
        $("#fila2").css("background-color", "");
    });
});

