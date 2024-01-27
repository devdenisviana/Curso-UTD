console.log(somaRecursiva(10));

function somaRecursiva(numero) {
  if (numero == 1) return 1;

  return numero + somaRecursiva(numero - 1);
}
