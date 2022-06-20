//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

let numerosDeLaListaArray = [];
let crearArrayDeNumeros = function() {
    let $numerosDeLaLista = document.querySelectorAll("li");
        for (i = 0; i < $numerosDeLaLista.length; i++) {
            numerosDeLaListaArray.push(Number($numerosDeLaLista[i].innerText));
        }
}
crearArrayDeNumeros();


let calcularPromedioNumeros = function() {
    let promedioNumeros = 0;
        for (i = 0; i < numerosDeLaListaArray.length; i++) {
            promedioNumeros = promedioNumeros + Number(numerosDeLaListaArray[i]);
        }
    promedioNumeros = promedioNumeros / numerosDeLaListaArray.length;

    document.querySelector("#promedio").innerText = promedioNumeros;
}
calcularPromedioNumeros();


let calcularNumeroMayor = function() {
    document.querySelector("#numero-mayor").innerText = Math.max(...numerosDeLaListaArray);
}
calcularNumeroMayor();


let calcularNumeroMenor = function() {
    document.querySelector("#numero-menor").innerText = Math.min(...numerosDeLaListaArray);
}
calcularNumeroMenor();


let calcularNumeroRepetido = function() {
    let numeroRepetido = [];
    let numeroDeRepeticiones = 0;

    numerosDeLaListaArray.forEach(function(value) {
        let repeticiones = [];

        for (i = 0; i < numerosDeLaListaArray.length; i++) {
            if (numerosDeLaListaArray[i] === value && !numeroRepetido.includes(value)) {
                repeticiones.push(value);
            }
        }
        
        if (repeticiones.length > numeroDeRepeticiones) {
            numeroRepetido = [value];
            numeroDeRepeticiones = repeticiones.length;
        } else if (repeticiones.length === numeroDeRepeticiones) {
            numeroRepetido.push(value);
        }
    })
    
    let textoNumeroRepetido;

    if (numeroRepetido.length === numerosDeLaListaArray.length) {
        textoNumeroRepetido = `No se repite nada`;
    } else if (numeroRepetido.length > 1) {
        textoNumeroRepetido = `Los números que más se repiten son ${numeroRepetido}; con una cantidad de ${numeroDeRepeticiones} veces`;
    } else {
        textoNumeroRepetido = `El número más repetido es ${numeroRepetido}, con una cantidad de ${numeroDeRepeticiones} veces`;
    }
    
    document.querySelector("#numero-repetido").innerText = textoNumeroRepetido;
}
calcularNumeroRepetido();
