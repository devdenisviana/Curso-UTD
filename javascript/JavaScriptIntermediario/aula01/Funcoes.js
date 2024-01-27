//Bloco de funções tradicionais
function subtracao(a,b){
    return a - b;
}

function somar2(a){
    return a + 2;
}

function diaDoMes(){
    return new Date().getDate();
}

console.log("Resultado da subtração: "+subtracao(15,10));
console.log("Resultado do somar: "+somar2(5));
console.log("Resultado do dia do mês: "+diaDoMes());
console.log("*******************************")
//Funções escritas com Arrow function
console.log("Funções e resultados escrutos com Arrow Function:");

const subtracaoVersao2 = (a,b) => a - b;

const somar2Versao2 = a => a + 2;

const diaDomesVersao2 = () => new Date().getDate();

console.log(subtracaoVersao2(3,1),+somar2Versao2(4),+diaDomesVersao2());