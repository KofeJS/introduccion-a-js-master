//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*
* */

//Pertenece a "index-P2.html"

document.querySelector("#subir-datos").onclick = function() {
    let nombreDeUsuario = document.querySelector("#nombre-usuario");
    let segundoNombreUsuario = document.querySelector("#segundo-nombre-usuario");
    let apellidoUsuario = document.querySelector("#apellido-usuario");
    let edadDeUsuario = document.querySelector("#edad-usuario");
    
    document.querySelector("h1").innerText = `Bienvenido/a ${nombreDeUsuario.value}!`;

    document.querySelector("#datos-ingresados").innerText = 
    `Nombre/s y apellido: ${nombreDeUsuario.value} ${segundoNombreUsuario.value} ${apellidoUsuario.value}
    Edad:${edadDeUsuario.value}`;

    return false
}
