//routes -- brings in express and functions
const routes = require('express').Router();
// const displayName = require('../controllers/index');
// const main = require('../routes/contacts');

// routes.get('/', displayName);
// routes.get('/', main);

routes.use('/contactsTest', require('./contactsTest'))

module.exports = routes;  