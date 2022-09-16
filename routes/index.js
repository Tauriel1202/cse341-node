//routes -- brings in express and functions
const routes = require('express').Router();
// const displayName = require('../controllers/index');
// const main = require('../routes/contacts');

// routes.get('/', displayName);
// routes.get('/', main);

routes.get('/', require('./contacts'))

module.exports = routes;  