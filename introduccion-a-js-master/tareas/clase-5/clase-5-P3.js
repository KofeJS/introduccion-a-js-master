//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

//Pertenece a "index-P3.html"

document.querySelector("#calcular").onclick = function() {

    let $tiempoHoras = document.querySelectorAll(".horas");
    let $tiempoMinutos = document.querySelectorAll(".minutos");
    let $tiempoSegundos = document.querySelectorAll(".segundos");
    let arrayDatosTiempo = [$tiempoHoras, $tiempoMinutos, $tiempoSegundos]
    
    let sumaTiempo = [0, 0, 0]
    //Suma de las horas, minutos y segundos de los videos
    for (A = 0; A < arrayDatosTiempo.length; A++) {
        let datoSumaTiempo = arrayDatosTiempo[A];
        
        for (B = 0; B < datoSumaTiempo.length; B++) {
            sumaTiempo[A] = sumaTiempo[A] + Number(datoSumaTiempo[B].value);
        }
    }
    //Redondeo de las unidades de horas, minutos y segundos
    if (sumaTiempo[2] >= 60) {
        sumaTiempo[1] = sumaTiempo[1] + Math.floor((sumaTiempo[2] / 60));
        sumaTiempo[2] = sumaTiempo[2] - (60 * Math.floor((sumaTiempo[2] / 60)));
    }

    if (sumaTiempo[1] >= 60) {
        sumaTiempo[0] = sumaTiempo[0] + Math.floor((sumaTiempo[1] / 60));
        sumaTiempo[1] = sumaTiempo[1] - (60 * Math.floor((sumaTiempo[1] / 60)));
    }

    document.querySelector("#resultado").innerText = `Duración de las clases: ${sumaTiempo[0]}° ${sumaTiempo[1]}' ${sumaTiempo[2]}''`
    
    return false;
}