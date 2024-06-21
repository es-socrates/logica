function main() {
    var nivelPelea;

    window.alert("¿Qué nivel de pelea tiene tu personaje?");
    var nivelJugador;

    nivelJugador = Number(window.prompt('Enter a value for nivelJugador'));
    var nivelEspada;

    window.alert("¿Qué nivel tiene tu espada?");
    var nivelArma;

    nivelArma = Number(window.prompt('Enter a value for nivelArma'));
    if (nivelJugador == 10 && nivelArma >= 12) {
        window.alert("¡Felicidades! Tienes el nivel para derrotar al enemigo.");
    } else {
        window.alert("Tu personaje no tiene las habilidades necesarias." + " " + "Comprueba tu nivel de espada o pelea.");
    }
}
