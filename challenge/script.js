const areaTexto = document.querySelector(".area-de-texto");             //variable para guardar area de texto 
const areaTextoResultado=document.querySelector(".area-de-texto-resultado");     //variable rea texto resultado
document.getElementById("copiar").style.display = "none";
/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

*/



function botonEncriptar(){                                      //funcion al clicar boton encriptar
    const textoEncriptado = encriptar(areaTexto.value);         // encriptar le entra el valor de areaTexto se asigna a textoEcripado
    areaTextoResultado.value=textoEncriptado;                  //el vaor de textoEncriptado se lo asigno a areaTextoResultado
                                      
    if(areaTexto.value!==""){
        document.getElementById("copiar").style.display = "block";
        document.getElementById("parrafo").style.display = "none";
        areaTextoResultado.style.backgroundImage="none";            //quitar imagen de fondo del areaTextoResultado
        areaTexto.value=""; 
    }else{
        document.getElementById("copiar").style.display = "none";
        document.getElementById("parrafo").style.display = "block";
        areaTextoResultado.style.backgroundImage = "url('./imagenes/imagen.png')";
    }
   
}

function encriptar(stringEncriptada){                              //funcion encriptar le entra el texto que se quiere encripar 

let matriz=[["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]; //arreglo de arreglos, los subarreglos posicion 0=a,i,a,o,u psicion 1=enter,imes...
console.table(matriz);                                              //mustra la matriz en forma de tabla en la consola 
stringEncriptada = stringEncriptada.toLowerCase();                  //convierte el texto de entrada en minusculas 
let contador=0;
while(contador<matriz.length){                                    //contador menor al tamaño de la matriz recorrer la matriz principal 

    if(stringEncriptada.includes(matriz[contador][0])){           //verifica si el valor de entrada contiene la vocal en la posicion 0 del subarreglo

        stringEncriptada=stringEncriptada.replaceAll(matriz[contador][0],matriz[contador][1]);    //si cumple la condicion remplaza la posicion 0 por la posicion 1 con replaceAll
    }


    
   
    contador++;


}
return stringEncriptada;                                         //devuelve texto ya enciptado 
}





function botonDesencriptar(){
    const textoDesencriptado = Desencriptar(areaTexto.value);
    areaTextoResultado.value=textoDesencriptado;

    if(areaTexto.value!==""){
        document.getElementById("copiar").style.display = "block";
        document.getElementById("parrafo").style.display = "none";
        areaTextoResultado.style.backgroundImage="none";            //quitar imagen de fondo del areaTextoResultado
        areaTexto.value=""; 
    }else{
        document.getElementById("copiar").style.display = "none";
        document.getElementById("parrafo").style.display = "block";
        areaTextoResultado.style.backgroundImage = "url('./imagenes/imagen.png')";
    }

}


function Desencriptar(stringDesenciptada){
    let matriz=[["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    console.table(matriz);
    stringDesenciptada = stringDesenciptada.toLowerCase();
    let contador=0;

    while(contador<matriz.length){
        if(stringDesenciptada.includes(matriz[contador][0])){
            
            stringDesenciptada = stringDesenciptada.replaceAll(matriz[contador][0],matriz[contador][1]);
        }
        contador++;

    }

    return stringDesenciptada
}



function copiarTexto(){

    areaTextoResultado.select();
    areaTextoResultado.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");


}