//determina se o numero é primo ou não
verificaPrimo(13);

function verificaPrimo(numero) {
  var numeroDivisores = 0;

  for (let divisor = 1; divisor <= numero; divisor++) {
    if (numero % divisor === 0) {
      numeroDivisores++;
    }
  }
  if (numeroDivisores == 2) console.log("O número " + numero + " é primo");
  else console.log("O número " + numero + " NÃO é primo");
}
