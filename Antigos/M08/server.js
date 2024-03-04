// Importa o módulo 'express' para lidar com rotas HTTP
const express = require('express');

// Cria uma instância do aplicativo Express
const app = express();

var bodyParser = requise('body-parser');
global._basedir = __dirname;

// Importa o módulo de configuração do banco de dados
const db = require('./config/db.config.js');

// Extrai o modelo "Cliente" do objeto db
const Cliente = db.Cliente;

// Importa o módulo 'body-parser' para analisar os corpos das solicitações HTTP
const bodyParser = require('body-parser');

// Importa o roteador definido em './routes/routes.js'
let router = require('./routes/routes.js');

// Importa o módulo 'cors' para lidar com requisições de origens cruzadas (CORS)
const cors = require('cors')

// Define as opções de CORS
const corsOptions = {
  origin: 'http://localhost:3000', // Define a origem permitida
  optionsSuccessStatus: 200 // Define o código de status de sucesso
}

// Aplica as opções de CORS ao aplicativo
app.use(cors(corsOptions));

// Aplica o middleware bodyParser para analisar corpos de solicitação JSON
app.use(bodyParser.json());

// Define o diretório 'resources' como um diretório estático
app.use(express.static('resources'));

// Usa o roteador definido para todas as rotas
app.use('/', router);

// Inicia o servidor na porta 8080
const server = app.listen(8080, function () {
  let host = server.address().address
  let port = server.address().port
  console.log("App está rodando no endereço http://%s:%s", host, port);
});

// Sincroniza o modelo do banco de dados com o Sequelize e cria a tabela se não existir
db.sequelize.sync({ force: true }).then(() => {
  console.log('Apaga e recria a tabela usando { force: true }');
  Cliente.sync().then(() => {
    // Dados de exemplo de clientes
    const clientes = [
      { nome: 'Pedro', idade: 23, email: 'pedro@email.com' },
      { nome: 'Sara', idade: 31, email: 'sara@email.com' },
      { nome: 'Emilly', idade: 18, email: 'emilly@email.com' }
    ];
    // Cria os clientes no banco de dados

    for (let i=0; i<clientes.length; i++){
        Cliente.create(clientes[i]);
    }

    clientes.map(cliente => {
      Cliente.create(cliente);
    });
  })
});
