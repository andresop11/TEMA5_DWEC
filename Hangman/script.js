// Palabras y categorías
const palabras = {
    ciudades: ["londres", "paris", "berlin", "tokio", "madrid"],
    frutas: ["manzana", "pera", "platano", "sandia", "melon"],
    animales: ["tigre", "leon", "elefante", "gato", "perro"]
};

// Variables globales
let palabraSeleccionada = "";
let categoriaSeleccionada = "";
let vidas = 10;
let palabraAdivinada = [];
let juegoTerminado = false;

// Elementos del DOM
const alfabetoDiv = document.getElementById("alfabeto");
const palabraDiv = document.getElementById("palabra");
const categoriaSpan = document.getElementById("categoriaSeleccionada");
const vidasSpan = document.getElementById("vidas");
const mensajeP = document.getElementById("mensaje");

// Función para inicializar el juego
function iniciarJuego() {
    // Seleccionar aleatoriamente una categoría y una palabra
    const categorias = Object.keys(palabras);
    categoriaSeleccionada = categorias[Math.floor(Math.random() * categorias.length)];
    palabraSeleccionada = palabras[categoriaSeleccionada][Math.floor(Math.random() * palabras[categoriaSeleccionada].length)];

    // Reiniciar el estado del juego
    vidas = 10;
    palabraAdivinada = Array(palabraSeleccionada.length).fill("_");
    juegoTerminado = false;

    // Actualizar el DOM
    categoriaSpan.textContent = categoriaSeleccionada.toUpperCase();
    palabraDiv.textContent = palabraAdivinada.join(" ");
    vidasSpan.textContent = vidas;
    mensajeP.textContent = "";

    // Crear el alfabeto
    generarAlfabeto();
}

// Crear botones para el alfabeto
function generarAlfabeto() {
    alfabetoDiv.innerHTML = "";
    const letras = "abcdefghijklmnopqrstuvwxyz".split("");
    letras.forEach(letra => {
        const boton = document.createElement("button");
        boton.textContent = letra;
        boton.disabled = false;
        boton.addEventListener("click", () => manejarIntento(letra, boton));
        alfabetoDiv.appendChild(boton);
    });
}

// Manejar el intento de una letra
function manejarIntento(letra, boton) {
    if (juegoTerminado) return;

    boton.disabled = true;

    if (palabraSeleccionada.includes(letra)) {
        // Actualizar letras adivinadas
        palabraSeleccionada.split("").forEach((char, index) => {
            if (char === letra) palabraAdivinada[index] = letra;
        });
        palabraDiv.textContent = palabraAdivinada.join(" ");
        verificarVictoria();
    } else {
        // Reducir vidas si la letra no está en la palabra
        vidas--;
        vidasSpan.textContent = vidas;
        verificarDerrota();
    }
}

// Verificar si el jugador ganó
function verificarVictoria() {
    if (!palabraAdivinada.includes("_")) {
        mensajeP.textContent = "¡Felicidades! Has ganado.";
        juegoTerminado = true;
        deshabilitarBotones();
    }
}

// Verificar si el jugador perdió
function verificarDerrota() {
    if (vidas <= 0) {
        mensajeP.textContent = `Perdiste. La palabra era: ${palabraSeleccionada}`;
        juegoTerminado = true;
        deshabilitarBotones();
    }
}

// Deshabilitar todos los botones
function deshabilitarBotones() {
    const botones = alfabetoDiv.querySelectorAll("button");
    botones.forEach(boton => boton.disabled = true);
}

// Inicializar el juego
iniciarJuego();
