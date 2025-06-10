const router = require('express').Router()
const { registrar, login } = require('../controllers/userController.js')

router.post('/register',
    //swagger.summary = 'Registrar novo usuário'
    //#swagger.description = 'Cria um novo usuário no sistema com nome, sobrenome, email e senha válidos'
    registrar)

router.post('/login',
    //swagger.summary = 'Login de usuário'
    //#swagger.description = 'Autentica um usuário existente com email e senha válidos, retornando um token JWT que deve ser usado para acessar rotas protegidas'
    //swagger.response[200] = {description: 'Login efetuado com sucesso'}
    //#swagger.response[401] = {description: 'Não autorizado.'}
    login)

module.exports = router