const swaggerAutogen = require('swagger-autogen')();

//details of swagger doc
const doc = {
  info: {
    title: 'Week 4 Personal Assignment',
    description: 'This is for the week 4 personal assignment.'
  },
  host: 'localhost:8080',
  schemes: ['http']
};

//the json for swagger doc
const output = './swagger.json';

//pass to route
const endpoints = ['./routes/index.js'];

//create the file
// swaggerAutogen(output, endpoints, doc);

// //run it
swaggerAutogen(output, endpoints, doc).then(async () => {
  await import('./server.js');
});
