// Definição de uma função construtora chamada Person
function Person(){
    // Dentro da função construtora, estamos definindo duas propriedades: nome e idade,
    // que serão atribuídas a cada objeto criado a partir desta função
    this.nome = '';
    this.idade = '';
}

// Criando uma nova instância (objeto) da função construtora Person
let p1 = new Person();

// Atribuindo valores às propriedades nome e idade do objeto p1
p1.nome = "Denis";
p1.idade = 29;

// Imprimindo o valor da propriedade nome do objeto p1
console.log(p1.nome); // Saída: Denis

// Imprimindo o valor da propriedade idade do objeto p1
console.log(p1.idade); // Saída: 29
