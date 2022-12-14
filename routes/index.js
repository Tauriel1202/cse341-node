//routes -- brings in express and functions
const routes = require('express').Router();

// const displayName = require('../controllers/index');
// routes.get('/', displayName);

const contacts = require('./contacts');
routes.use('/contacts', contacts);

const swagger = require('./swagger')
routes.use('/', swagger)

// console.log('index.js')
module.exports = routes;
