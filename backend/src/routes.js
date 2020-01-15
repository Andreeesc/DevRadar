const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

//Métodos HTTP: get, post, put, delete

//Tipos de parâmetros:
//Query Params - request.query (filtros, ordenação, paginação, ...)
//Route Params - request.params (Identificar um recurso na alteração | remoção)
//Body - request.body (Dados para criação ou alteração de um registro)

//MongoDB (Banco de dados não-relacional)

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index)

module.exports = routes;