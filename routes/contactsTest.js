const routes = require('express').Router();
const contacts = require('../controllers/contacts');

routes.get('/', contacts.listContacts);
routes.get('/', contacts.singleContact);

module.exports =  routes;