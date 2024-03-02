// Declaração de um array chamado "vetor" contendo alguns números.
const vetor = [1, 2, 3, 4, 5, 7];

// Utilizando o método "find" no array "vetor" para encontrar o primeiro elemento que satisfaz a condição especificada.
// O método "find" itera sobre cada elemento do array e retorna o primeiro elemento para o qual a função de callback retorna true.
const procure = vetor.find(function(item) {
    // A função de callback verifica se o elemento atual é igual a 5.
    return item == 5;
});

// Imprime o elemento encontrado no console.
console.log(procure);
