const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const connection = require('./database/connection');
const routes = express.Router();

/**
 * Tipos de parâmetros:
 * Query Params: Parâmetros nomeados enviados na rota após ? (filtros, paginação) -> request.query
 * Route Params: Parâmetro utilizados para identificar recursos. Ex: /users/:id -> request.params
 * Request Body: Corpo da requisição utilizado para criar ou alterar recursos (json)
 */

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;