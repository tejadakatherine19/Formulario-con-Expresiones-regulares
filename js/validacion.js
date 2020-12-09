var Validación = false;
var Validación1 = false;
var Validación2= false;
var Validación3 = false;
var Validación4 = false;
var Validación5 = false;
var Validación6 = false;

function vadicaciones(){
    
nombre = document.getElementById("nombre").value;
apellido = document.getElementById("apellidos").value;
correo = document.getElementById("correo").value;
edad = document.getElementById("edad").value;
departamento = document.getElementById("nacionalidad").value;
dui = document.getElementById("unic").value;
targeta = document.getElementById("targeta").value;

 

nombres(nombre);
apellidos(apellido);
correos(correo);
edadd(edad);
depa(departamento);
duii(dui);
target(targeta);

if(Validación == true  && Validación1 == true&& Validación2 == true && Validación3 == true && Validación4 == true && Validación5 == true&& Validación6 == true){
    window.location="agrad.html"
}else{
    window.location="formulario.html"
}
}
function nombres(){
   
    var regex_letras =/^[a-zA-ZáÁéÉíÍóÓúÚñÑüÜ\s]+$/;
    if(regex_letras.test(nombre)){
         Validación = true;
                  
    }else{
        alert('Validación incorrecta nombre');
        Validación = false;
     
    }
}
function apellidos(){

    var regex_letras = /^[a-zA-ZáÁéÉíÍóÓúÚñÑüÜ\s]+$/;
    if(regex_letras.test(apellido)){
         Validación1 = true;               
    }else{
        alert('Validación incorrecta apellido');
        Validación1 = false;
    }
}
function depa(){

    var regex_letras = /^[a-zA-ZáÁéÉíÍóÓúÚñÑüÜ\s]+$/;
    if(regex_letras.test(departamento)){
         Validación2 = true;                
    }else{
        alert('Validación incorrecta departamento');
         Validación2 = false;
    }
}
function correos(){
    var regex_email = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]+[.][a-zA-Z0-9]+$/;
    if(regex_email.test(correo)){
         Validación3 = true;                
    }else{
        alert('Validación incorrecta correo');
         Validación3 = false;
    }

}
function edadd(){
    var regex_numeros = /^[0-9]{2}$/;
    if(regex_numeros.test(edad)){
         Validación4 = true;                
    }else{
        alert('Validación incorrecta edad');
        Validación4 = false;
    }

}

function target(){
    var regex_targeta = /^(\d{4}-){3}(\d{4}){1}$/;
    if(regex_targeta.test(targeta)){
         Validación5 = true;    
      
               
    }else{
        alert('Validación incorrecta targeta');
        Validación5 = false;
    }
}

function duii(){
    var regex_DUI = /^[0-9]{8}-[0-9]{1}$/;
    if(regex_DUI.test(dui)){
         Validación6 = true; 

    }else{
        alert('Validación incorrecta DUI');
         Validación6 = false; 
    }
}

function borrar(){
document.getElementById("nombre").value="";
document.getElementById("apellidos").value="";
document.getElementById("correo").value="";
document.getElementById("edad").value="";
document.getElementById("nacionalidad").value="";
document.getElementById("unic").value="";
document.getElementById("targeta").value="";


}