var a = 30,
  b = 100;

var maior = (a + b + Math.abs(a - b)) / 2;

console.log("Entre os números " + a, " e " + b, " o maior é: ", +maior);

var c = 30,
  d = 100;

var menor = (c + d - Math.abs(c - d)) / 2;

console.log("Entre os números " + c, " e " + d, " o menor é: ", +menor);
