var notas = [9, 8, 10, 7, 5, 3, 9, 8, 6, 8, 10, 4, 10];

for (let atual = 0; atual < notas.length; atual++) {
  for (let proximo = atual + 1; proximo < notas.length; proximo++) {
    if (notas[atual] > notas[proximo]) {
      var temp = notas[atual];

      notas[atual] = notas[proximo];

      notas[proximo] = temp;
    }
  }
}
console.log(notas);
