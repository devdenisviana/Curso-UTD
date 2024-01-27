//algoritmo para informar quantos divisores um número tem
var numero = 69;
var div = 0;
var divisores = [];
for (let divisor = 1; divisor <= numero; divisor++) {
  if (numero % divisor === 0) {
    div++;
    //método push adiciona o elemento ao vetor divisores
    divisores.push(divisor);
  }
}
console.log("O número possui " + div, "divisores");
console.log(divisores);
