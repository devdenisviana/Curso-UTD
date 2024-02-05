// Função Regular:
hello = function() {
    document.getElementById("demo").innerHTML += this;
    // Adiciona o valor de 'this' ao conteúdo do elemento com o ID 'demo'
  }
  
  // O objeto 'window' chama a função:
  window.addEventListener("load", hello);
  // Adiciona um ouvinte de eventos ao objeto 'window' para o evento 'load' que chama a função 'hello'
  
  // Um objeto de botão chama a função:
  document.getElementById("btn").addEventListener("click", hello);
  // Adiciona um ouvinte de eventos ao elemento do botão com o ID 'btn' para o evento 'click' que chama a função 'hello'
  