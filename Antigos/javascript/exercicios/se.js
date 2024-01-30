// algoritmo que diz se a pessoa é maior ou menor de idade

var idade = 17;

if (idade >= 150) {
  console.log("idade inválida");
} else if (idade >= 18 && idade <= 150) {
  console.log("maior de idade");
} else if (idade >= 0) {
  console.log("menor de idade");
} else {
  console.log("idade inválida");
}
