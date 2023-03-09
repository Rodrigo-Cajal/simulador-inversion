function calculo() {
    let capital = document.getElementById('capital').value;
    let total = (capital*((1+(0.84/100))**12)).toFixed(2);
    let totalMenosCapital = ((capital*((1+(0.84/100))**12)-capital)).toFixed(2);
    const capitalDos = document.getElementById('capitalDos');
    const gananciaAnual = document.getElementById('gananciaAnual');
    const capitalMasGanancia = document.getElementById('capitalMasGanancia');
    const plazoMinimo = document.getElementById('plazoMinimo');
    const tasaAnualEnDolares = document.getElementById('tasaAnualEnDolares');


    capitalDos.innerHTML = "Capital <br>" + capital + " USD";
    gananciaAnual.innerHTML = "Ganancia Anual <br>" + totalMenosCapital + " USD";
    capitalMasGanancia.innerHTML = "Capital + Ganancia <br>" + total + " USD";
    plazoMinimo.innerHTML = "Plazo mínimo <br>" + "3 meses";
    tasaAnualEnDolares.innerHTML = "Tasa Anual en Dólares <br>" + "10.08%";
}


