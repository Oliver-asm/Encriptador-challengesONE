const textMensaje = document.querySelector(".texto-entrada");
const textReceptor = document.querySelector(".texto-salida");

let reglaCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

let caracteresEspeciales = ["~","!","@","#","$","%","^","&","*","(",")","_","-","+","=","`","[","]","{","}","|","'",";",":","\"","\\","'",",","<",".",">","/","?","á","é","í","ó","ú","¿"];

textMensaje.focus();

function encriptar (textoEncriptado){

    const encriptadoMinuscula = textoEncriptado.toLowerCase();
    let validar = false;

    if(encriptadoMinuscula != textoEncriptado){
        alert("El texto insertado posee alguna letra en mayúscula")
        validar=true;                
    }
    
    for (let ic=0; ic < caracteresEspeciales.length; ic++){
        if(textoEncriptado.includes(caracteresEspeciales[ic])){
            alert("El texto que insertó posee caracteres especiales");
            validar=true;
            break ;
        }
    }

    if(validar==false){       
        for(let i = 0; i < reglaCodigo.length; i++){
            if(textoEncriptado.includes(reglaCodigo[i][0])){
                textoEncriptado=textoEncriptado.replaceAll(reglaCodigo[i][0],reglaCodigo[i][1])
            }
        }
        return textoEncriptado;
    }

    if (validar==true){
        return false;
    }   
}

function desencriptar (textoDesencriptado){

    const densecriptadoMinuscula = textoDesencriptado.toLowerCase();
    let validar = false;

    if(densecriptadoMinuscula != textoDesencriptado){
        alert("El texto insertado posee alguna letra en mayúscula")
        validar=true;                
    }
    
    for (let ic=0; ic < caracteresEspeciales.length; ic++){
        if(textoDesencriptado.includes(caracteresEspeciales[ic])){
            alert("El texto que insertó posee caracteres especiales");
            validar=true;
            break ;
        }
    }

    if(validar==false){       
        for(let i = 0; i < reglaCodigo.length; i++){
            if(textoDesencriptado.includes(reglaCodigo[i][1])){
                textoDesencriptado=textoDesencriptado.replaceAll(reglaCodigo[i][1],reglaCodigo[i][0])
            }
        }
        return textoDesencriptado;
    }

    if (validar==true){
        return false;
    }   
}

function btnEncriptar(){  
    const mensajeEncriptado = encriptar(textMensaje.value);
    if(mensajeEncriptado==false){
        textReceptor.style.backgroundImage="url(imagenes/mensaje.jpg)";
        textReceptor.value="";
        textMensaje.value="";
    }

    else{
        textReceptor.value = mensajeEncriptado;
        textReceptor.style.backgroundImage ="none";
        textMensaje.value = "";
    }

    textMensaje.focus();
}

function btnDesencriptar(){  
    const mensajeDesencriptado = desencriptar(textMensaje.value);
    if(mensajeDesencriptado==false){
        textReceptor.style.backgroundImage="url(imagenes/mensaje.jpg)";
        textReceptor.value="";
        textMensaje.value="";
    }

    else{
        textReceptor.value = mensajeDesencriptado;
        textReceptor.style.backgroundImage ="none";
        textMensaje.value = "";
    }

    textMensaje.focus();
}

function copiar() {
    textReceptor.select();
    navigator.clipboard.writeText(textReceptor.value);
    textReceptor.value = "";
    textReceptor.style.backgroundImage="url(imagenes/mensaje.jpg)";
    textMensaje.focus();
}