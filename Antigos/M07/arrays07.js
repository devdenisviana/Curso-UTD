// Declaração de um array chamado "numeros" com os elementos 1, 2, 3 e 4.
let numeros = [1, 2, 3, 4];

// Utilização do método reduce() no array "numeros" para calcular a soma de todos os elementos.
// O método reduce() recebe uma função de callback que é aplicada a cada elemento do array.
const soma = numeros.reduce(function(resultado, item) {
    // A função de callback recebe dois parâmetros: o resultado parcial da redução (resultado) e o próximo elemento do array (item).
    // Neste caso, a função simplesmente retorna a soma do resultado parcial com o próximo elemento.
    return resultado + item;
});

// Imprime o valor da soma no console.
console.log(soma);
