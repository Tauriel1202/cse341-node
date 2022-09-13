const routes = require('express').Router();
const displayName = require('../controllers/index');

routes.get('/', displayName);

module.exports = routes;