//programa que analise a velocidade de um carro e informe se foi multado e o valor

var velocidade = 140;
var multa = 0;

if (velocidade > 80) {
  multa = (velocidade - 80) * 5;

  console.log(
    "A sua velocidade é de: " + velocidade,
    "km/h a multa aplicada é de: " + multa,
    "reais."
  );
}
