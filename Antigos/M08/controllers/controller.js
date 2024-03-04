// Importa o módulo de configuração do banco de dados
const db = require('../config/db.config.js');

// Extrai o modelo "Cliente" do objeto db
const Cliente = db.Cliente;

// Define uma função para criar um novo cliente
exports.createCliente = (req, res) => {
    // Cria um objeto vazio para armazenar os dados do cliente
    let cliente = {};
    try {
        // Preenche o objeto cliente com os dados do corpo da requisição
        cliente.nome = req.body.nome;
        cliente.idade = req.body.idade;
        cliente.email = req.body.email;
        // Salva o cliente no banco de dados MySQL
        Cliente.create(cliente, { attributes: ['id', 'nome', 'idade', 'email'] })
            .then(result => {
                res.status(200).json(result);
            });
    } catch (error) {
        // Se houver um erro, retorna uma resposta de erro ao cliente
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

// Define uma função para obter um cliente pelo ID
exports.getCliente = (req, res) => {
    // Busca um cliente pelo ID no banco de dados
    Cliente.findByPk(req.params.id, { attributes: ['id', 'nome', 'idade', 'email'] })
        .then(cliente => {
            // Retorna o cliente encontrado
            res.status(200).json(cliente);
        }).catch(error => {
            // Se houver um erro, retorna uma resposta de erro ao cliente
            console.log(error);
            res.status(500).json({
                message: "Error!",
                error: error
            });
        })
}

// Define uma função para obter todos os clientes
exports.clientes = (req, res) => {
    try {
        // Busca todos os clientes no banco de dados
        Cliente.findAll({ attributes: ['id', 'nome', 'idade', 'email'] })
            .then(clientes => {
                // Retorna todos os clientes encontrados
                res.status(200).json(clientes);
            })
    } catch (error) {
        // Se houver um erro, retorna uma resposta de erro ao cliente
        console.log(error);
        res.status(500).json({
            message: "Error!",
            error: error
        });
    }
}

// Define uma função para excluir um cliente pelo ID
exports.deleteCliente = async (req, res) => {
    try {
        // Obtém o ID do cliente a ser excluído da solicitação
        let clienteId = req.params.id;
        // Busca o cliente pelo ID no banco de dados
        let cliente = await Cliente.findByPk(clienteId);
        if (!cliente) {
            // Se o cliente não existir, retorna uma mensagem de erro ao cliente
            res.status(404).json({
                message: "Does Not exist a Customer with id = " + clienteId,
                error: "404",
            });
        } else {
            // Se o cliente existir, exclui o cliente do banco de dados
            await cliente.destroy();
            res.status(200).json('Cliente deletado com sucesso.');
        }
    } catch (error) {
        // Se houver um erro, retorna uma resposta de erro ao cliente
        res.status(500).json({
            message: "Error -> Can NOT delete a customer with id = " + req.params.id,
            error: error.message
        });
    }
}

// Define uma função para atualizar um cliente
exports.updateCliente = async (req, res) => {
    try {
        // Obtém o cliente a ser atualizado pelo ID da solicitação
        let cliente = await Cliente.findByPk(req.body.id);
        if (!cliente) {
            // Se o cliente não existir, retorna uma mensagem de erro ao cliente
            res.status(404).json({
                message: "Not Found for updating a customer with id = " + req.body.id,
                error: "404"
            });
        } else {
            // Se o cliente existir, atualiza os dados do cliente com os novos dados fornecidos na solicitação
            let updatedObject = {
                nome: req.body.nome,
                idade: req.body.idade,
                email: req.body.email,
            }
            // Executa a atualização no banco de dados
            let result = await Cliente.update(updatedObject, {
                returning: true,
                where: { id: req.body.id },
                attributes: ['id', 'nome', 'idade', 'email']
            });
            // Retorna o resultado da atualização ao cliente
            if (!result) {
                res.status(500).json({
                    message: "Error -> Can not update a customer with id = " + req.params.id,
                    error: "Can NOT Updated",
                });
            }
            res.status(200).json(result);
        }
    } catch (error) {
        // Se houver um erro, retorna uma resposta de erro ao cliente
        res.status(500).json({
            message: "Error -> Can not update a customer with id = " + req.params.id,
            error: error.message
        });
    }
}
