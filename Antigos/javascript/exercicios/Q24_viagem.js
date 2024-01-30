//algoritmo que calcula o preço da passagem baseado na distancia a ser percorrida.

var distancia = 300;
var taxa = 0;
var valorDaPassagem = 0;

if (distancia > 200) taxa = 0.45;
else taxa = 0.5;

valorDaPassagem = distancia * taxa;

console.log(
  "A distância a ser percorrida será de: " + distancia,
  "km e o valor da passagem será de: " + valorDaPassagem,
  "reais"
);

console.log("Segunda forma de resolver:");
//se a distancia for maior que 200 o valor da passagem será de 0,45 por km, senão será de 0.50 por km
taxa = distancia > 200 ? 0.45 : 0.5;

valorDaPassagem = distancia * taxa;

console.log(valorDaPassagem);
