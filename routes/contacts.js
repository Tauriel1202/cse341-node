// connect to mongodb
const { MongoClient, ObjectId } = require("mongodb");

// getting the data
async function main(req, res) {
  const client = new MongoClient(process.env.MONGO_URI, {useNewUrlParser:true, useUnifiedTopology: true});
  try {
    await client.connect();
    await listContacts(client);
    await singleContact(client, req, res);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
main().catch(console.error);

async function listContacts(client) {
  databasesList = await client.db("cse341-node");
  const contacts = await databasesList.collection("contacts").find().toArray();
  console.log(contacts);
}

async function singleContact(client, req, res){
  databasesList = await client.db('cse341-node');
  databasesList.collection("contacts").findOne({_id: new ObjectId(req.query.id)}).then(single => {res.send(single)}).catch(e => {console.log(e)});
  
}

module.exports = main;

