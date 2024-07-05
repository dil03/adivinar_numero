alert("Bienvenido al juego de hallar el número aleatorio del 1 al 100, cuentas con 10 vidas");
        
var estado_vida = 10;
var numero_alea = Math.floor(Math.random() * 101);
var reiniciar = document.getElementById("reini");
var mostrar = document.getElementById("sugerencias");
var presionar = document.getElementById("butto");


reiniciar.addEventListener("click",function(){
    numero_alea = Math.floor(Math.random() * 101);
    estado_vida=10
    document.getElementById("simbolo_vida").innerHTML= estado_vida 
    mostrar.innerHTML="";
    document.getElementById("formu").reset()
})

presionar.addEventListener("click", function() {
    var cuadro = parseInt(document.getElementById("cuadro_numero").value);
    if (isNaN(cuadro) || cuadro > 100 || cuadro < 1) {
        document.getElementById("sugerencias").innerHTML="Por favor, ingrese un número válido";
        return;
    }
    
    if (cuadro > numero_alea) {
        mostrar.innerHTML="El número debe ser menor al que ingresaste" ;
        
    } else if (cuadro < numero_alea) {
        mostrar.innerHTML="El número debe ser mayor al que ingresaste";
        
    } else if (cuadro === numero_alea) {
        mostrar.innerHTML="¡felicidades, has encontrado el numero!";
        return;
        
    }
    
    if (estado_vida == 0) {
        document.getElementById("sugerencias").innerHTML="Te has quedado sin vidas";
        return document.getElementById("simbolo_vida").innerHTML= "0"
    }

    estado_vida= estado_vida-1;
    document.getElementById("simbolo_vida").innerHTML= estado_vida 
});
