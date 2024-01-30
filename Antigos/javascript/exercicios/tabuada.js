//Algoritmo para calcular tabuada

var numero = 7;

//criação de um contador. regra é: para contador menor que 10 faça incremento do contador.
for (let contador = 0; contador <= 10; contador++) {
  var resultado = numero * contador;

  console.log(numero + "x" + contador + "=" + resultado);
}
