// Declaração de um array chamado "vetor" contendo alguns números.
const vetor = [1, 2, 3, 4, 5, 7];

// Utilizando o método "map" no array "vetor" para criar um novo array chamado "novoVetor".
// O método "map" itera sobre cada elemento do array original e retorna um novo array com base em uma função de callback.
const novoVetor = vetor.map(function(item) {
    // A função de callback recebe cada elemento do array original como parâmetro e retorna o valor multiplicado por 2.
    return item * 2;
});

// Imprime o novo array "novoVetor" no console.
console.log(novoVetor);
