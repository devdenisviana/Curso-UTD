//algoritmo para criar todas as tabuadas
//iniciando na tabuada de 1 e fazendo o incremento ate a tabuada de 10
for (let numero = 1; numero <= 10; numero++) {
  //criando um contador e fazendo o incremento ate o valor 10
  for (let contador = 0; contador <= 10; contador++) {
    //fazendo a multiplicação
    var resultado = numero * contador;
    //Imprimindo o resultado em tela
    console.log(numero + "x" + contador + "=" + resultado);
  }
  console.log("----------");
}
