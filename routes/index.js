const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Hei Maethoriel!');
})

module.exports = routes;