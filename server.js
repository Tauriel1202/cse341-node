//create an express app, connect to routes, and listen for the port
//Connect Express and create app
const express = require('express');
const app = express();

//cors
const cors = require('cors');
app.use(cors());

//body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  // res.setHeader('')
  /*
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
  );
  res.setHeader('Content-Type', 'application/json');
  */
  // res.setHeader("Content-Type", "text/plain")
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

//require env and create it
const dotevn = require('dotenv');
dotevn.config();

//routes
app.use('/', require('./routes'));

//port working
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`🎵 Listening on port ${port} 🎵`);
});
