// Importa o módulo env.js que contém as variáveis de ambiente do projeto
const env = require('./env.js');

// Importa a biblioteca Sequelize
const Sequelize = require('sequelize');

// Cria uma instância do Sequelize para se conectar ao banco de dados
const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host, // Configura o host do banco de dados
    dialect: env.dialect, // Configura o dialeto do banco de dados (por exemplo, 'mysql', 'postgres', etc.)
    operatorsAliases: false, // Desativa os aliases de operadores obsoletos
});

// Cria um objeto "db" para armazenar referências aos modelos e à instância do Sequelize
const db = {};

// Adiciona as instâncias Sequelize e sequelize ao objeto "db" para acesso global
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importa e define o modelo "Cliente" usando o Sequelize, passando a instância do Sequelize e o Sequelize como parâmetros
db.Cliente = require('./models/client.model.js')(sequelize, Sequelize);

// Exporta o objeto "db" para que possa ser utilizado em outras partes do código
module.exports = db;
