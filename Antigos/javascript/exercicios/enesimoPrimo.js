//imprime somente os numeros primos
for (let numero = 0; numero <= 20; numero++) {
  if (verificaPrimo(numero)) console.log(numero);
}

function verificaPrimo(numero) {
  var numeroDivisores = 0;

  for (let divisor = 1; divisor <= numero; divisor++) {
    if (numero % divisor === 0) {
      numeroDivisores++;
    }
  }
  if (numeroDivisores == 2) return true;
  else return false;
}
