let aluno = {
    nome: 'Anita',
    idade: 22,
    curso: 'Engenharia de Produção'
};

// Alterando as propriedades nome e idade do objeto aluno
aluno.nome = 'Denis';
aluno.idade = 44;

// Desestruturando as propriedades nome e idade do objeto aluno
let { nome, idade } = aluno;

// Imprimindo o nome e a idade
console.log(nome); // Saída: Denis
console.log(idade); // Saída: 44
