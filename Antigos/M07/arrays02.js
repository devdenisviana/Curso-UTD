// Declaração de um array chamado "vetor" contendo alguns números.
const vetor = [1, 2, 3, 4, 5, 7];

// Utilizando o método "reduce" no array "vetor" para calcular a soma de todos os elementos.
// O método "reduce" recebe uma função de callback e um valor inicial como parâmetros.
const vetorRed = vetor.reduce(function(total, prox) {
    // A função de callback recebe dois parâmetros: o acumulador (total) e o próximo elemento do array (prox).
    // Neste caso, a função simplesmente soma o valor acumulado com o próximo elemento.
    return total + prox;
});

// Imprime o valor resultante da redução (soma) no console.
console.log(vetorRed);
