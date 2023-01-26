
//FUNCIONES BOTÓN Y MOUSE ON DE PRODUCTOS


// SI PULSAS EN EL BOTÓN APARECEN LOS SUBAPARTADOS 

var state = ""; // Variable para saber que función se ha ejecutado

function dropdown() {
    state="onclick"; //Si se ejecuta dropdown con esta condición la variable state almacena el texto "onclick"
    var x = document.getElementById("subapartados");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
        state=""; //Si se ejecuta el dropdown con esta condición la variable state almacena ""
    }
}

// SI PONES EL MOUSE ENCIMA DE LA CATEGORÍA APARECEN LOS APARTADOS
function dropdown2(){
    if(state!="onclick"){ // Si la variable state no tiene almacenado el texto "onclick"
        state = "mouseover";
        document.getElementById("subapartados").style.display="flex";
    }
}

// SI QUITAS EL MOUSE DE LA CATEGORÍA DESAPARECEN LOS APARTADOS
function dropup(){
    if(state==="mouseover"){ // Si la variable state tiene almacenado el texto "mouseover"
    document.getElementById("subapartados").style.display="none";
    }
}