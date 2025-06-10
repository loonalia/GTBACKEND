const router = require('express').Router();
const { inserirItens, alterarItens, deletarItens} = require('../controllers/cartItemController.js')
const authMiddleware =  require('../middleware/authMiddleware.js')


router.post('/', authMiddleware,
    // #swagger.summary = 'Inserir itens no carrinho'
    inserirItens)

router.put('/:id',
    //swagger.summary = 'Alterar quantidade de itens no carrinho'
    alterarItens) 

router.delete('/:id',
    // #swagger.summary = 'Deletar itens do carrinho'
    deletarItens) 

module.exports = router