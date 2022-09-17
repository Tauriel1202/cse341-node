const routes = require('express').Router();
const contacts = require('../controllers/contacts')
console.log(contacts)
const single = contacts.single
const all = contacts.all

routes.all('/:id', single);
routes.all('/', all);
// routes.get('/:id', contacts.singleContact);

module.exports =  routes;