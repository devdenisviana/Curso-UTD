// Definição de um objeto aluno com três propriedades: nome, idade e curso
let aluno = {
    nome: 'Anita',                  // Propriedade nome do aluno
    idade: 22,                      // Propriedade idade do aluno
    curso: 'Engenharia de Produção',// Propriedade curso do aluno

    // Definição de um método getter chamado getNome
    get getNome() {                 
        return this.nome;           // Retorna o valor da propriedade nome do objeto aluno
    }
};

// Imprime o resultado do método getter getNome do objeto aluno
console.log(aluno.getNome); // Saída: Anita
