let numero = parseInt(prompt( "ingrese numero"))


function obtenerPrimos(maximo) {
    if (typeof maximo != "number" || !Number.isInteger(maximo)) { return null; }


    let auxiliar = [];
    let primos = [];

    for (let i = 2; i <= maximo; ++i) {
        if (!auxiliar[i]) {
            primos.push(i); for (let j = i << 1; j <= maximo; j += i) {
                auxiliar[j] = true;
            }
        }
    }
    return primos;
}

alert(obtenerPrimos(numero))