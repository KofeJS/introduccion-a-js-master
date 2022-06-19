//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

let numerosArray = [];
let crearArray = function() {
    let $numeros = document.querySelectorAll("li");
        for (A = 0; A < $numeros.length; A++) {
            numerosArray.push(Number($numeros[A].innerText));
        }
}
crearArray();


let calcularPromedio = function() {
    let promedioNumeros = 0;
        for (A = 0; A < numerosArray.length; A++) {
            promedioNumeros = promedioNumeros + Number(numerosArray[A]);
        }
    promedioNumeros = promedioNumeros / numerosArray.length;

    document.querySelector("#promedio").value = promedioNumeros;
}
calcularPromedio();


let calcularMayor = function() {
    document.querySelector("#numero-mayor").value = Math.max(...numerosArray);
}
calcularMayor();


let calcularMenor = function() {
    document.querySelector("#numero-menor").value = Math.min(...numerosArray);
}
calcularMenor();


let calcularRepetido = function() {
    let numeroRepetido = [];
    let numeroRepeticiones = 0;

    numerosArray.forEach(function(value) {
        let repeticiones = [];

        for (A = 0; A < numerosArray.length; A++) {
            if (numerosArray[A] === value && !numeroRepetido.includes(value)) {
                repeticiones.push(value);
            }
        }
        
        if (repeticiones.length > numeroRepeticiones) {
            numeroRepetido = [value];
            numeroRepeticiones = repeticiones.length;
        } else if (repeticiones.length === numeroRepeticiones) {
            numeroRepetido.push(value);
        }
    })
    
    let textoNumeroRepetido;

    if (numeroRepetido.length === numerosArray.length) {
        textoNumeroRepetido = `No se repite nada`;
    } else if (numeroRepetido.length > 1) {
        textoNumeroRepetido = `Los números que más se repiten son ${numeroRepetido}; con una cantidad de ${numeroRepeticiones} veces`;
    } else {
        textoNumeroRepetido = `El número más repetido es ${numeroRepetido}, con una cantidad de ${numeroRepeticiones} veces`;
    }
    
    document.querySelector("#numero-repetido").innerText = textoNumeroRepetido;
}
calcularRepetido();