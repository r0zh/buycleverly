
// SI PULSAS EN EL BOTÓN APARECEN LOS SUBAPARTADOS 

function dropdown() {
    var x = document.getElementById("subapartados");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// SI PONES EL MOUSE ENCIMA DE LA CATEGORÍA APARECEN LOS APARTADOS
function dropdown2() {
    document.getElementById("subapartados").style.display="block";
}

// SI QUITAS EL MOUSE DE LA CATEGORÍA DESAPARECEN LOS APARTADOS
function dropup(){
    document.getElementById("subapartados").style.display="none";
}