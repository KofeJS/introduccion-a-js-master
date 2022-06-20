// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

let nombreDeUsuario = prompt("Hola! como te llamás?");

if (nombreDeUsuario === null || nombreDeUsuario.trim().length === 0) {
        console.log("No ingresaste un nombre");
    } else if (nombreDeUsuario.toLowerCase().trim() === "santiago") {
        console.log(`Hola ${nombreDeUsuario.trim()}, te llamas igual que mi hermano`);
    } else if (nombreDeUsuario.toLowerCase().trim() === "leandro") {
        console.log(`Hola! yo también me llamo ${nombreDeUsuario.trim()}`);
    } else {
        console.log(`Hola ${nombreDeUsuario.trim()}!`);
    };

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

const edadDelUsuario = Number(prompt("Cuántos años tenés?"));

if (edadDelUsuario === 18) {
    console.log(`${nombreDeUsuario}, tenemos la misma edad!`);
} else if (edadDelUsuario > 18) {
    console.log(`${edadDelUsuario}? Sos mayor que yo`);
} else if (edadDelUsuario < 18) {
    console.log(`${edadDelUsuario}? Sos menor que yo`);
} else {
    console.log("Perdón, no entendí la respuesta");
};

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.


function procesarEntradaAlBar() {

    let documentacionUsuario = prompt("Poseés documentación? Responder con Si/No");

    if (documentacionUsuario === null) {
        console.log("Por favor, ingrese Si o No");
        return
    }

    let respuestaDocumentacionMinuscula = documentacionUsuario.toLowerCase().trim();
    const mayoriaEdad = 18;

    if (respuestaDocumentacionMinuscula === "si") {
        const edadDelUsuario = Number(prompt("Cuántos años tiene?"));
        if (edadDelUsuario < mayoriaEdad) {
            console.log("Perdón pero no puede pasar, es menor de 18");
        } else {
            console.log("Bienvenido al Bar");
        }

    } else if (respuestaDocumentacionMinuscula === "no") {
        console.log("No puedes entrar al Bar sin documentación");
    } else {
        console.log("Perdón, no entendí la respuesta. Responda Si o No");
    }  
}

console.log(procesarEntradaAlBar())