console.log("Funciona");


function numerar() {

    numero = prompt("Introduce un numero del 1 al 100");

    var suma = 0;
    var texto = "";
    var contador= 0;

    while (numero>=101 || numero<=0) {
        numero = window.prompt("Número introducido no válido, prueba de nuevo introduciendo un número del 1 al 100");
    }
    
    console.log(numero);

    for (let i = numero; i < 1000; i++){
        
        if(i%2!=0){

            
            console.log(i);
            suma = (parseInt(i) + parseInt(suma));
            
            texto = texto + "  " +  i ;

            contador ++;
            
            
        }

        
    }
    console.log(suma);

    texto = texto + "<br><br> Y la suma de todos los numeros es <strong>"+ suma + "</strong>";

    document.getElementById('caja').innerHTML = texto;


}

