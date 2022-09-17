const { MongoClient, ObjectId } = require("mongodb");

console.log("controllers");

async function single (req, res, next) {
  // if('query' in req){
    const uri = process.env.MONGO_URI.replace("cse341-node", "contacts");
    const client = new MongoClient(uri);
    const dbo = client.db("cse341-node");
    const all = await dbo.collection("contacts").findOne({_id: new ObjectId(req.params.id)})
    console.log('💩',all)
    res.send(all)
  // }
  next()
}

async function all(req, res) {
  
  const uri = process.env.MONGO_URI.replace("cse341-node", "contacts");
  const client = new MongoClient(uri);
  const dbo = client.db("cse341-node");
  const all = await dbo.collection("contacts").find().toArray()
  console.log(all)
  res.send(all)
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
