//create an express app, connect to routes, and listen for the port
//Connect Express and create app
const express = require("express");
const app = express();

//require env and create it
const dotevn = require("dotenv");
dotevn.config();

//bringing in the routes
app.use("/", require("./routes"));
console.log('server.js')
//port working
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`🎵 Listening on port ${port} 🎵`);
});
