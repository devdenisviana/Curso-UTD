// Definição da classe Person
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Método para exibir informações da pessoa
    displayInfo() {
      return `Nome: ${this.name}, Idade: ${this.age}`;
    }
  }
  
  // Criando instância da classe Person
  const person1 = new Person('John Doe', 25);
  
  // Exibindo informações no HTML
  const outputElement = document.getElementById('output');
  outputElement.textContent = person1.displayInfo();
  