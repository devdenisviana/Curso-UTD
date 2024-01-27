//Algoritmo para calcular a quantidade de tinta necessária para pintar uma parede

var largura = 8,
  altura = 3;

var area = largura * altura;

var quantidadeDeTinta = area / 2;

console.log(
  "serão necessários " +
    quantidadeDeTinta +
    " litros de tinta para pintar a parede"
);
