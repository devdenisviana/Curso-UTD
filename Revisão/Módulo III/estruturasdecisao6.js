// inicio do laço 'for' que inicializa 'x' com 0, executa enquanto 'x' for menor que 20 e incrementa 'x' por 2 em cada iteração
for (let x = 0; x < 20; x+=2){

    //cria um nó de texto contendo o valor 'x' seguido por um espaço em branco
    let resultado = document.createTextNode(x+" ");

    //adiciona o nó de texto ao elemento HTML com o ID 'painel'
    painel.appendChild(resultado);
}