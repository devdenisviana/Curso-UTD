//Programa javascript que demonstra uso de funções

const painel = document.getElementById('painel');

let texto = ''
let numero1 = 30, numero2 = 10;

//função com parâmetros e com retorno
function soma(variavel1, variavel2){
    return variavel1 + variavel2;
}

texto = soma(numero1,numero2);

const resultado = document.createTextNode(texto);
painel.appendChild(resultado);