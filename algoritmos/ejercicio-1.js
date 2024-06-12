function main() {
    var nacimientoUsuario;

    nacimientoUsuario = 1994;
    var añoActual;

    añoActual = 2024;
    var edadCarnetLegal;

    edadCarnetLegal = 18;
    var edadUsuario;

    edadUsuario = añoActual - nacimientoUsuario;
    if (edadUsuario >= edadCarnetLegal) {
        window.alert("John Doe puede entrar en la página web");
    } else {
        window.alert("John Doe no tiene la edad legal para entrar en la página web");
    }
}
