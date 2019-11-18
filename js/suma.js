$(document).ready(function(){

    $("#btnenviar").click(sumar);
        
});

function sumar(){
    var valor1=$('#v1').val();
    var valor2=$('#v2').val();

    $("#respuesta").html(parseInt(valor1)+parseInt(valor2));
}