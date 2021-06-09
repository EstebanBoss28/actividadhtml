console.log("Conectado")


var foto = document.getElementById("amador");

function amador(){

    foto.style.visibility = "hidden";

}


var caja = document.getElementById("caja");

var abajo = 20;

function mover(){
    caja.style.top = 0 + abajo + "px" ;
    abajo = abajo + 20;
}