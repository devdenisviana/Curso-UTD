function superFuncao(a, b){
    let subtracao = a - b;
    subtracao = subtracao -2;
    let diaDoMes = new Date().getDate();
    return diaDoMes;
}

//Usando Arrow Function

const superFuncaoVersao2 = (a, b) => {
    let subtracao = a - b;
    subtracao = subtracao -2;
    let diaDoMes = new Date().getDate();
    return diaDoMes;
}