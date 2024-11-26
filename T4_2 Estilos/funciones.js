

function agrandarfuente(){

    const parrafos = document.querySelectorAll("p"); 

    parrafos.forEach(parrafo => {

        parrafo.style.fontSize="2em"; 

    }); 
}

function disminuirFuente(){

    const parrafos = document.querySelectorAll("p"); 

    parrafos.forEach(parrafo => {

        parrafo.style.fontSize="0.7em"; 

    }); 
}

function defectoFuente(){
    const parrafos = document.querySelectorAll("p"); 

    parrafos.forEach(parrafo => {

        parrafo.style.fontSize=""; 

    }); 
}

function centrarTexto(){
    const parrafos = document.querySelectorAll("p"); 

    parrafos.forEach(parrafo => {

        parrafo.style.textAlign="center"; 

    }); 
}

function izquierdaTexto(){
    const parrafos = document.querySelectorAll("p"); 

    parrafos.forEach(parrafo => {

        parrafo.style.textAlign="left"; 

    }); 
}

function derechaTexto(){
    const parrafos = document.querySelectorAll("p"); 

    parrafos.forEach(parrafo => {

        parrafo.style.textAlign="right"; 

    }); 
}