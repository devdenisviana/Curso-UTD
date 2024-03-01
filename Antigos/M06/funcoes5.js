// Definição de um objeto aluno com três propriedades: nome, idade e curso
let aluno = {
    nome: 'Anita',                   // Propriedade nome do aluno
    idade: 22,                       // Propriedade idade do aluno
    curso: 'Engenharia de Produção', // Propriedade curso do aluno

    // Definição de um método getter chamado getNome
    get getNome() {                  
        return this.nome;            // Retorna o valor da propriedade nome do objeto aluno
    },
    // Definição de um método setter chamado changeNome
    set changeNome(novoNome) {
        this.nome = novoNome;        // Define o valor da propriedade nome do objeto aluno
    },
    // Definição de um método getter chamado getIdade
    get getIdade() {
        return this.idade;           // Retorna o valor da propriedade idade do objeto aluno
    },
    // Definição de um método setter chamado changeIdade
    set changeIdade(idade) {
        this.idade = idade;          // Define o valor da propriedade idade do objeto aluno
    }
};

// Alterando o nome do aluno para 'Lara' usando o método setter changeNome
aluno.changeNome = 'Lara';
// Alterando a idade do aluno para 40 usando o método setter changeIdade
aluno.changeIdade = 40;

// Imprime o resultado do método getter getNome, que retorna o nome do aluno
console.log(aluno.getNome); // Saída: Lara

// Imprime o valor da propriedade idade do objeto aluno
console.log(aluno.idade);   // Saída: 40
