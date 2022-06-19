//Pertenece a "index-P2.html"

document.querySelector("#subir-datos").onclick = function() {
    let nombreDeUsuario = document.querySelector("#nombre-usuario");
    let edadDeUsuario = document.querySelector("#edad-usuario");
    let mensajeBienvenida = document.querySelector("h1");

    mensajeBienvenida.innerText = `Bienvenido/a ${nombreDeUsuario.value}`;
    document.querySelector("#datos-ingresados").innerText = `Nombre: ${nombreDeUsuario.value} - Edad:${edadDeUsuario.value} años`;

    return false
}