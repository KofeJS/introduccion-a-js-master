let calcularMayor = function(numerosArray) {
    numeroMayor = Math.max(...numerosArray);
    return numeroMayor;
}

let calcularMenor = function(numerosArray) {
   numeroMenor = Math.min(...numerosArray);
   return numeroMenor;
}

let calcularPromedio = function(numerosArray) {
    let promedioNumeros = 0;
        for (A = 0; A < numerosArray.length; A++) {
            promedioNumeros = promedioNumeros + Number(numerosArray[A]);
        }
    promedioNumeros = promedioNumeros / numerosArray.length;

   return promedioNumeros;
}

function calcularSalarioMensualPromedio(salarioAnualIntegrantes) {
    let salarioMensualPromedio = 0;
        for (A = 0; A < salarioAnualIntegrantes.length; A++) {
            salarioMensualPromedio = salarioMensualPromedio + Number(salarioAnualIntegrantes[A]);
        }
    salarioMensualPromedio = salarioMensualPromedio / salarioAnualIntegrantes.length;
    salarioMensualPromedio = salarioMensualPromedio / 12;

    return salarioMensualPromedio;
}