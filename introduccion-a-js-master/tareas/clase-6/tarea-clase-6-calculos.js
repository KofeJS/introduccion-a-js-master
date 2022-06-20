let calcularNumeroMayor = function(numerosArray) {
    numeroMayor = Math.max(...numerosArray);
    return numeroMayor;
}

let calcularNumeroMenor = function(numerosArray) {
   numeroMenor = Math.min(...numerosArray);
   return numeroMenor;
}

let calcularPromedioNumeros = function(numerosArray) {
    let promedioNumeros = 0;
        for (let i = 0; i < numerosArray.length; i++) {
            promedioNumeros = promedioNumeros + Number(numerosArray[i]);
        }
    promedioNumeros = promedioNumeros / numerosArray.length;

   return promedioNumeros;
}

function calcularSalarioMensualPromedio(salarioAnualIntegrantes) {
    const MESES_POR_ANIO = 12;
    let salarioMensualPromedio = 0;
        for (let i = 0; i < salarioAnualIntegrantes.length; i++) {
            salarioMensualPromedio = salarioMensualPromedio + Number(salarioAnualIntegrantes[i]);
        }
    salarioMensualPromedio = salarioMensualPromedio / salarioAnualIntegrantes.length;
    salarioMensualPromedio = salarioMensualPromedio / MESES_POR_ANIO;

    return salarioMensualPromedio;
}