// Definindo um objeto chamado 'pessoa'
const pessoa = {
    nome: "João",   // Propriedade 'nome' do objeto
    idade: 25,       // Propriedade 'idade' do objeto
  
    // Método do objeto que utiliza 'this'
    apresentar: function() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
      // 'this' se refere ao objeto no qual o método foi chamado (neste caso, 'pessoa')
    }
  };
  
  // Chamando o método do objeto
  pessoa.apresentar();
  // Ao chamar o método 'apresentar', 'this' dentro do método se refere ao objeto 'pessoa'
  