var continua = true;

while (continua) {
  var resp = prompt("deseja continuar?");

  if (resp === "n") {
    continua = false;
  }
}

alert("fim do laço");
