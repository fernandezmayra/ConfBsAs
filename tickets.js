function calcular(){
    var descuento = null;

    var cantidad = document.getElementsByName("cantidad")[0].value;
    var categoria = document.getElementById("categoria");
    var selected = categoria.options[categoria.selectedIndex].text;
    if (selected=="Estudiante"){
        descuento = 80/100;
    } else if (selected=="Trainee"){
        descuento = 50/100;
    } else {
        descuento = 15/100;
    }
    document.getElementById("total").innerHTML="Total a Pagar: $" + ((cantidad*200)-(cantidad*200*descuento));
}

function borrar(){
   let form = document.getElementById("form");
   document.getElementById("total").innerHTML="Total a Pagar: $";
   form.reset();
}