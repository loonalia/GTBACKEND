const { criarCarrinhoRepository } = require("../repositories/cartRepository");

async function criarCarrinhoService(params) {
    return await criarCarrinhoRepository()
}

module.exports = {criarCarrinhoService}