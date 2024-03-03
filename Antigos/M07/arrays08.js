// Declaração de um array chamado "numeros" com os elementos de 1 a 8.
let numeros = [1, 2, 3, 4, 5, 6, 7, 8];

// Utilizando o método reduce() no array "numeros" para calcular a soma de todos os elementos.
// O método reduce() recebe uma função de callback que é aplicada a cada elemento do array.
const soma = numeros.reduce(function(resultado, item) {
    // A função de callback recebe dois parâmetros: o resultado parcial da redução (resultado) e o próximo elemento do array (item).
    // Neste caso, a função simplesmente retorna a soma do resultado parcial com o próximo elemento.
    return resultado + item;
});

// Imprime a soma dos elementos do array "numeros" no console.
console.log(soma);

// Utilizando o método filter() no array "numeros" para filtrar os elementos maiores que 6.
// O método filter() retorna um novo array contendo apenas os elementos que satisfazem a condição especificada na função de callback.
const filtro = numeros.filter(item => item > 6);

// Imprime os elementos do novo array "filtro" no console.
console.log(filtro);
