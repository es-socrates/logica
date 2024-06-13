function main() {
    var nacimientoUsuario;

    nacimientoUsuario = Number(window.prompt('Enter a value for nacimientoUsuario'));
    var añoActual;

    añoActual = 2024;
    var edadCarnetLegal;

    edadCarnetLegal = 18;
    var edadUsuario;

    edadUsuario = añoActual - nacimientoUsuario;
    if (edadUsuario >= edadCarnetLegal) {
        window.alert("El usuario puede entrar en la página web");
    } else {
        window.alert("El usuario no tiene la edad legal para entrar en la página web");
    }
}
