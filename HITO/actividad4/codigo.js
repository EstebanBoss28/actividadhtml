console.log("Conectado");


function mostrar() {
  
    
    var ciudad = document.forms["formulario"]["ciudad"].value;
    var mail= document.forms["formulario"]["correo"].value;
    var curso = document.forms["formulario"]["curso"].value;
    

    fecha = new Date();
    fechacalendario = new Date(document.forms["formulario"]["fecha"].value);

    if (fechacalendario < fecha || fechacalendario =="Invalid Date") {
        window.alert("Debe ser una fecha posterior a hoy");
    }else{
        
        window.alert("Los datos que has introducido son los siguientes:\n -Correo electrónico: " + mail + "\n -Ciudad: " + ciudad + "\n -Curso: " + curso + "\n -Fecha: " + fechacalendario);
    
    }




}


