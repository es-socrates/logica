function main() {
    var edadPersona;

    edadPersona = Number(window.prompt('Enter a value for edadPersona'));
    var edadPermitida;

    edadPermitida = 18;
    if (edadPersona >= edadPermitida) {
        window.alert("¡Felicidades! Puedes entrar a la Tierra Media.");
    } else {
        var edadEspera;

        edadEspera = edadPermitida - edadPersona;
        window.alert("Lo sentimos, debes esperar " + edadEspera + " años.");
    }
}
