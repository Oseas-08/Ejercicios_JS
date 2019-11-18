let datos=[{id:01, nombre:"Juan", direccion:"Ahuchapan", tipoPersona:{codigo:01, tipo:"Mala"}},
{id:02, nombre:"Maria", direccion:"Tacuba", tipoPersona:{codigo:02, tipo:"Buena"}},
{id:03, nombre:"Elmer", direccion:"Turin", tipoPersona:{codigo:02, tipo:"Buena"}}];
$(document).ready(function(){
    datos.forEach(i => {
        $("#tregistro").append(""
        +"<tr>"
        +"<td>"+i.id+"</td>"
        +"<td>"+i.nombre+"</td>"
        +"<td>"+i.direccion+"</td>"
        +"<td>"+i.tipoPersona.tipo+"</td>"
        +"</tr>"
        )
    });
});

$(document).ready(function(){
    $("#enviar").click(inicio);
})

function inicio(){
    var nombre=$("#nombre").val();
    var edad=$("#edad").val();
    var tipo=$("#tipo").val();

    let registros=[{nom:nombre, ed:edad}];

    if (tipo==01) {
        registros.forEach(i=>{
            $("#buenos").append(""
            + "<li>" + nombre + " " + edad + "</li>"
            )
        })
    } else {
        registros.forEach(i=>{
            $("#malos").append(""
            + "<li>" + nombre + " " + edad + "</li>"
            )
        })
    }
}