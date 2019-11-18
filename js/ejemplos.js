//Declaracion de variables para almacenar los click
var numClics = 0;
var numDobleClics = 0;

//Metodos de inicio para cada una de las funciones
$(document).ready(function () {

    $("#micapa").dblclick(function (e) {
        numDobleClics++;
        $("#mensaje").html("Doble Clic " + numDobleClics);
    });
    $("#micapa").click(function (e) {
        numClics++;
        $("#mensaje").html("Clic " + numClics);
    });
})

/*===========================================================================*/
$(document).ready(function () {
    $("#prueba").hover(function () {
        $("#prueba").css("background-color", "#04B4AE");
    }, function () {
        $("#prueba").css("background-color", "#04B431");
    });
});

/*===========================================================================*/
$(document).ready(function () {
    $("input[name=nombre1]").click(function () {
        alert('Evento click sobre un input text con nombre="nombre1"');
    });
    //$("#nombre2").click(function(){
    $("input[id=nombre2]").click(function () {
        alert('Evento click sobre un input text con id="nombre2"');
    });
    //$(".nombre3").click(function(){
    $("input[class=nombre3]").click(function () {
        alert('Evento click sobre un button con class="nombre3"');
    });
});

/*===========================================================================*/
$(document).ready(function () {
    $("input[name=edad]").click(function () {
        alert("Bien!!!, la edad seleccionada es: " + $('input:radio[name=edad]:checked').val());
        //alert("Bien!!!, la edad seleccionada es: " + $(this).val());  
    });
});

/*===========================================================================*/
$(document).ready(function(){
	$("#prueba2").mouseover(function(){
    		alert("El ratón está sobre el texto");
  	});
 
	$("#prueba2").mouseout(function(){
    		alert("El ratón ya no está sobre el texto");
 	});
});
/*===========================================================================*/
/*===========================================================================*/
/*===========================================================================*/