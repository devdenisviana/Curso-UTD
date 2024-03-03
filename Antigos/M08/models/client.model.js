// Exporta um módulo que define o modelo "Cliente" usando o Sequelize
module.exports = (sequelize, Sequelize) => {
    // Define o modelo "Cliente" com as colunas e configurações especificadas
    const Cliente = sequelize.define('cliente', {
        // Define a coluna "id" como um inteiro autoincrementado e chave primária
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true, // Indica que o valor será incrementado automaticamente
            primaryKey: true // Define esta coluna como chave primária
        },
        // Define a coluna "nome" como uma string
        nome: {
            type: Sequelize.STRING
        },
        // Define a coluna "email" como uma string
        email: {
            type: Sequelize.STRING
        },
        // Define a coluna "idade" como um inteiro
        idade: {
            type: Sequelize.INTEGER
        },
    });
    // Retorna o modelo "Cliente" definido
    return Cliente;
}
