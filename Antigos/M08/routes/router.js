// Importa o módulo 'express' para lidar com rotas HTTP
let express = require('express');

// Cria um novo objeto de roteador Express
let router = express.Router();

// Importa o controlador de clientes que contém as funções para manipular solicitações relacionadas a clientes
const clientes = require('../controllers/controller.js');

// Define rotas HTTP e associa cada uma a uma função no controlador de clientes

// Rota para adicionar um novo cliente (POST)
router.post('/api/cliente', clientes.createCliente);

// Rota para obter um cliente pelo ID (GET)
router.get('/api/cliente/:id', clientes.getCliente);

// Rota para obter todos os clientes (GET)
router.get('/api/clientes', clientes.clientes);

// Rota para atualizar um cliente existente (PUT)
router.put('/api/cliente', clientes.updateCliente);

// Rota para excluir um cliente pelo ID (DELETE)
router.delete('/api/cliente/:id', clientes.deleteCliente);

// Exporta o roteador para que possa ser utilizado em outras partes do código
module.exports = router;
