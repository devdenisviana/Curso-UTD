function verificarDivisibilidade() {
    var numero = document.getElementById('numero').value;
    var divisor = document.getElementById('divisor').value;

    var mensagemDiv = document.getElementById('mensagem');

    if (numero % divisor === 0) {
        mensagemDiv.innerHTML = `${numero} é divisível por ${divisor}.`;
    } else {
        mensagemDiv.innerHTML = `${numero} não é divisível por ${divisor}.`;
    }
}

function limparFormulario() {
    document.getElementById('numero').value = '';
    document.getElementById('divisor').value = '';
    document.getElementById('mensagem').innerHTML = '';
}
