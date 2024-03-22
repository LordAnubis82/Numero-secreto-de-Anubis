//Genaracion de un numero aleatorio
let numeroGenerado = 0;
//VARIABLE DE CANTIDAD DE INTENTOS
let intentos = 0;
let numeroMaximo = 15;
let numerosSorteados = [];
let numeroSecreto = generarNumeroSecreto();

//variable del temporizador
let temporizador;
//funcion temporizador y ternario para el setTmeout
function temporizadorDeTexto(texto){
    temporizador= setTimeout(texto == "texto4"?ocultarTexto4:ocultarTexto3, 3000);
}
//FUNCIONES PARA OCULTAR LOS TEXTOS
function ocultarTexto4(){
    document.getElementById("texto4").style.visibility = "hidden";
    
}
function ocultarTexto3(){
    document.getElementById("texto3").style.visibility = "hidden";
}
//FUNCION PARA GENERAR NUMERO SECRETO
function generarNumeroSecreto() {
    numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;   
    if(numerosSorteados.length==0){
        return numeroGenerado;
    }else
     if(numerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        numerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

//Generando una FUNCIÓN para capturar el input y visibilizar textos con temporizador
function ejecutarIntento() {
    intentos++;
    let numeroDelJugador = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDelJugador === numeroSecreto){
        document.getElementById('texto2').style.visibility = "visible";
        document.getElementById("reinicio").removeAttribute("disabled")
    } else{
        if (intentos == 4){
            document.getElementById("contenedorGameover").style.display = "block";           
            document.getElementById("contenedorPrincipal").style.display = "none";
            
        }else{
            if (numeroDelJugador > numeroSecreto){
            document.getElementById("texto4").style.visibility = "visible";          
            temporizadorDeTexto("texto4");
           
            }else{
                document.getElementById("texto3").style.visibility = "visible";
                temporizadorDeTexto("texto3");
             
            }         

        }
    }
      limpiarCaja();
}
function condicionesIniciales(){
    limpiarCaja();
    numeroSecreto = generarNumeroSecreto();   
    intentos = 0;    
    ocultarElAcertaste();
    document.getElementById("contenedorGameover").style.display = "none";
    document.getElementById("contenedorPrincipal").style.display = "block";
}

function reinicio(){
//limpiar la caja
//generar numero aleatorio
//reiniciar intentos
condicionesIniciales();
//desabilitar el boton
document.querySelector("#reinicio").setAttribute("disabled", "true");

//desabilitar el game over

//esconder texto 2

}

function limpiarCaja(){
 document.querySelector("#valorUsuario").value = "";
}
 
function ocultarElAcertaste(){
   
   document.getElementById('texto2').style.visibility = "hidden";
}


