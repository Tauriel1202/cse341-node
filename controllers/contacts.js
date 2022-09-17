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
      console.log("💩", all);
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

// async function main(req, res) {
//   const client = new MongoClient(process.env.MONGO_URI);
//   try {
//     await client.connect();
//     await listContacts(client);
//     await singleContact(client, req, res);
//   } catch (e) {
//     console.error(e);
//   }
//   finally {
//     await client.close();
//   }
// }
// main().catch(console.error);

// async function listContacts(client, req, res) {
//   databasesList = await client.db("cse341-node");
//   const contacts = await databasesList.collection("contacts").find().toArray();
//   console.log(contacts);
// }

// async function singleContact(client, req, res){
//   databasesList = await client.db('cse341-node');
//   const single = await databasesList.collection("contacts").findOne({_id: new ObjectId(req.query.id)});
//   // const single = await databasesList.collection("contacts").findOne({_id: new ObjectId(userId)});
//   res.send(single)
// }

// module.exports = main;
