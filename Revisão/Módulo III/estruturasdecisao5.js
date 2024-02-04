// Variável constante 'painel' recebe o elemento HTML com o ID 'painel'
const painel = document.getElementById('painel');
// Declaração de uma variável 'texto' inicializada como uma string vazia
let texto = '';

// Declaração de uma variável 'flag' inicializada como verdadeira
let flag = true;
// Declaração de uma variável 'contador' inicializada com 0
let contador = 0;

// Laço de repetição 'while' que executa enquanto 'flag' for verdadeira
while (flag){
    // Condicional 'if' verifica se 'contador' é menor que 10
    if(contador<10){
        // Imprime a mensagem "trabalhando..." no console
        console.log("trabalhando...")
        //operador de incremento
        contador++;
        
        // A variável 'texto' recebe a string "trabalhando"
        texto = "trabalhando"
        // Cria um nó de texto contendo o valor de 'texto' seguido por um espaço em branco
        let resultado = document.createTextNode(texto+" ");
        // Adiciona o nó de texto ao elemento HTML com o ID 'painel'
        painel.appendChild(resultado);  
    }
    // Caso 'contador' não seja menor que 10
    else{
        // Atribui falso a 'flag', encerrando o loop 'while'
        flag = false;
    }
}

