// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

for (let A = 3; A < 22; A = A + 3) {
    console.log(A);
}

// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.

let numeroInicio = 10;

while (numeroInicio > 0) {
    console.log(numeroInicio);
    numeroInicio = numeroInicio - 1;
}

// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

for (let A = 1; A <= 50; A++) {
    
    if (A % 3 === 0 && A % 5 === 0) {
            console.log(`(${A}) FizzBuzz!`);
    } else if (A % 3 === 0) {
            console.log(`(${A}) Fizz!`);
    } else if (A % 5 === 0) {
            console.log(`(${A}) Buzz!`);
    } else {
        console.log(A);
    }
}

// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])

const numerosDePromedio = [19, 11, 5, 5, 4, 6];

function calcularPromedio (datosInsertados) {
    let resultado = 0;

    for (let A = 0; A < datosInsertados.length; A++) {
        resultado = resultado + datosInsertados[A];
    }
    
    console.log(`El promedio es ${resultado}`);
}

console.log(calcularPromedio(numerosDePromedio));