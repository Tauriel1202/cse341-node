const { MongoClient, ObjectId } = require("mongodb");

console.log("controllers");

async function single(req, res, next) {
  const uri = process.env.MONGO_URI.replace("cse341-node", "contacts");
  const client = new MongoClient(uri);
  const dbo = client.db("cse341-node");
  const all = await dbo
    .collection("contacts")
    .findOne({ _id: new ObjectId(req.params.id) })
    .then((all) => {
      console.log(all);
      res.send(all);
      next();
    }).catch(e => {console.log(e)})
}

async function all(req, res) {
  const uri = process.env.MONGO_URI.replace("cse341-node", "contacts");
  const client = new MongoClient(uri);
  const dbo = client.db("cse341-node");
  const all = await dbo.collection("contacts").find().toArray()
  .then((all) => {
  console.log(all);
  res.send(all);
}).catch(e => {console.log(e)})
}

module.exports = { single, all };