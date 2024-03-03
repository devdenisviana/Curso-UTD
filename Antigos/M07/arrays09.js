const alunos = [
    {name: 'João', nota:8},
    {name: 'Ana', nota:10},
    {name: 'Paulo', nota:5},
    {name: 'Carlos', nota:6}
];

const aprovados = alunos.filter(aluno => aluno.nota>=7);

console.log(aprovados); 