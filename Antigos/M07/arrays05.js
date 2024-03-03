// Declaração de um array chamado "numeros" com os elementos 1, 2, 3 e 4.
let numeros = [1, 2, 3, 4];

// Utilizando a desestruturação de array para atribuir o primeiro elemento do array a variável "a" e os demais elementos a um novo array chamado "b".
let [a, ...b] = numeros;

// Imprime o valor da variável "a" no console.
console.log(a);

// Imprime os valores do novo array "b" no console.
console.log(b);
