numero = 994;
numero2 = 625;
numero3 = 27;

var centena = numero / 100;
console.log("Sem a biblioteca");
console.log(centena);

var centena = Math.round(numero / 100);
console.log(
  "com a biblioteca Math e round fazendo o arredondamento pro valor inteiro mais próximo"
);
console.log(centena);

var centena = Math.trunc(numero / 100);
console.log(
  "com a biblioteca Math mostrando somente a parte inteira do resultado"
);
console.log(centena);

var centena = Math.floor(numero / 100);
console.log("com a biblioteca Math com floor, que arredonda pra menos");
console.log(centena);

var centena = Math.ceil(numero / 100);
console.log("com a biblioteca Math com ceil, que arredonda pra mais");
console.log(centena);

var raiz = Math.sqrt(numero2);
console.log("com a biblioteca Math com sqrt, que mostra a raiz quadrada");
console.log(raiz);

var raizCubica = Math.cbrt(numero3);
console.log("com a biblioteca Math com cbrt, que mostra a raiz cúbica");
console.log(raizCubica);

var potencia = Math.pow(3, 3);
console.log("Exemplo com o numero 3 elevado ao quadrado");
console.log(potencia);

var modulo = Math.abs(-345);
console.log("A função Math com o uspo de abs, que mostra o valor modular");
console.log(modulo);

console.log(Math.PI + " Math com PI, exibe o numero PI");

console.log(Math.max(10, 3, 50, 9));
