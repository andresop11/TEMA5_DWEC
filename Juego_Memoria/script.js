const tablero = document.getElementById("tablero");
const timer = document.getElementById("timer");

let cartas = [];
let cartasReveladas = [];
let parejasEncontradas = 0;
let tiempo = 0;
let intervalo;

// Crear el tablero
function iniciarJuego() {
    cartas = generarCartas();
    mezclarCartas(cartas);
    crearTablero();
    iniciarCronometro();
}

// Generar cartas en pares
function generarCartas() {
    const valores = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]; // Máximo 10 pares
    return [...valores, ...valores]; // Duplicar las cartas para crear pares
}

// Mezclar las cartas
function mezclarCartas(array) {
    array.sort(() => Math.random() - 0.5);
}

// Crear el tablero dinámicamente
function crearTablero() {
    tablero.innerHTML = "";
    cartas.forEach((valor, index) => {
        const carta = document.createElement("div");
        carta.classList.add("carta");
        carta.dataset.valor = valor;
        carta.dataset.index = index;
        carta.addEventListener("click", () => manejarClick(carta));
        tablero.appendChild(carta);
    });
}

// Manejar el clic en una carta
function manejarClick(carta) {
    if (cartasReveladas.length < 2 && !carta.classList.contains("revelada")) {
        revelarCarta(carta);
        cartasReveladas.push(carta);

        if (cartasReveladas.length === 2) {
            verificarPareja();
        }
    }
}

// Revelar carta
function revelarCarta(carta) {
    carta.classList.add("revelada");
    carta.textContent = carta.dataset.valor;
}

// Ocultar cartas si no son pareja
function ocultarCartas() {
    cartasReveladas.forEach(carta => {
        carta.classList.remove("revelada");
        carta.textContent = "";
    });
    cartasReveladas = [];
}

// Verificar si las cartas son pareja
function verificarPareja() {
    const [carta1, carta2] = cartasReveladas;
    if (carta1.dataset.valor === carta2.dataset.valor) {
        parejasEncontradas++;
        cartasReveladas = [];
        verificarVictoria();
    } else {
        setTimeout(ocultarCartas, 1000);
    }
}

// Verificar si se ganó el juego
function verificarVictoria() {
    if (parejasEncontradas === cartas.length / 2) {
        clearInterval(intervalo);
        setTimeout(() => alert(`¡Ganaste! Tiempo: ${formatearTiempo(tiempo)}`), 500);
    }
}

// Iniciar cronómetro
function iniciarCronometro() {
    tiempo = 0;
    timer.textContent = "00:00";
    clearInterval(intervalo);
    intervalo = setInterval(() => {
        tiempo++;
        timer.textContent = formatearTiempo(tiempo);
    }, 1000);
}

// Formatear tiempo en minutos y segundos
function formatearTiempo(segundos) {
    const minutos = Math.floor(segundos / 60);
    const seg = segundos % 60;
    return `${minutos.toString().padStart(2, "0")}:${seg.toString().padStart(2, "0")}`;
}

// Iniciar el juego al cargar
iniciarJuego();
