const routes = require("express").Router();
//const { Sobrevivente } = require('./app/models')
//Definição das rotas depois dos testes

//Sobrevivente.create({
//    name: 'Icaro',
//    idade: 24,
//    sexo: 'masc',
//    latitude: '30°',
//    longitude: '60°',
//    reports: '0'
//})
const SobreviventeController = require('./app/controllers/SobreviventeController')

routes.post('/criar', SobreviventeController.store);

module.exports = routes;