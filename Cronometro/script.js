// Variables para manejar el cronómetro
let temporizador;
let segundos = 0;

// Elementos del DOM
const pantalla = document.getElementById('pantalla');
const botonIniciar = document.getElementById('iniciar');
const botonDetener = document.getElementById('detener');
const botonReiniciar = document.getElementById('reiniciar');

// Formatear el tiempo como MM:SS
function formatearTiempo(segundos) {
    const minutos = Math.floor(segundos / 60).toString().padStart(2, '0');
    const seg = (segundos % 60).toString().padStart(2, '0');
    return `${minutos}:${seg}`;
}

// Función para iniciar el cronómetro
function iniciarCronometro() {
    if (!temporizador) { // Verifica que no haya otro temporizador en marcha
        temporizador = setInterval(() => {
            segundos++;
            pantalla.textContent = formatearTiempo(segundos);
        }, 1000); // Incrementa cada segundo
    }
}

// Función para detener el cronómetro
function detenerCronometro() {
    clearInterval(temporizador);
    temporizador = null;
}

// Función para reiniciar el cronómetro
function reiniciarCronometro() {
    detenerCronometro(); // Detiene el cronómetro
    segundos = 0; // Reinicia el contador
    pantalla.textContent = formatearTiempo(segundos); // Actualiza la pantalla
}

// Añadir eventos a los botones
botonIniciar.addEventListener('click', iniciarCronometro);
botonDetener.addEventListener('click', detenerCronometro);
botonReiniciar.addEventListener('click', reiniciarCronometro);
