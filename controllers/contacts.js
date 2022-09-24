const { MongoClient, ObjectId } = require('mongodb');

console.log('controllers');

async function single(req, res, next) {
  const uri = process.env.MONGO_URI.replace('cse341-node', 'contacts');
  const client = new MongoClient(uri);
  const dbo = client.db('cse341-node');
  const all = await dbo
    .collection('contacts')
    .findOne({ _id: new ObjectId(req.params.id) })
    .then((all) => {
      console.log(all);
      // res.setHeader('Content-Type', 'application/json');
      res.send(all);
      next();
    })
    .catch((e) => {
      console.log(e);
    });
}

async function all(req, res) {
  const uri = process.env.MONGO_URI.replace('cse341-node', 'contacts');
  const client = new MongoClient(uri);
  const dbo = client.db('cse341-node');
  const all = await dbo
    .collection('contacts')
    .find()
    .toArray()
    .then((all) => {
      console.log(all);
      // res.setHeader('Content-Type', 'application/json');
      res.send(all);
    })
    .catch((e) => {
      console.log(e);
    });
}

async function newContact(req, res) {
  const uri = process.env.MONGO_URI.replace('cse341-node', 'contacts');
  const client = new MongoClient(uri);
  const dbo = client.db('cse341-node');
  const newContact = await dbo.collection('contacts');
  newContact.insertOne({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    favColor: req.body.favColor,
    bday: req.body.bday
  });
  console.log('Status: 201');
}

async function updateContact(req, res) {
  const uri = process.env.MONGO_URI.replace('cse341-node', 'contacts');
  const client = new MongoClient(uri);
  const dbo = client.db('cse341-node');
  const updateContact = await dbo.collection('contacts');
  updateContact.updateOne(
    { _id: new ObjectId(req.params.id) },
    {
      $set: {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        favColor: req.body.favColor,
        bday: req.body.bday
      }
    }
  );
  // res.setHeader('Content-Type', 'application/json');
  console.log('Status: 204');
  // res.redirect('/');
}

async function deleteContact(req, res) {
  const uri = process.env.MONGO_URI.replace('cse341-node', 'contacts');
  const client = new MongoClient(uri);
  const dbo = client.db('cse341-node');
  const deleteContact = await dbo.collection('contacts');
  deleteContact.deleteOne({ _id: new ObjectId(req.params.id) });
  // res.setHeader('Content-Type', 'application/json');
  console.log('Status: 200');
  // res.redirect('http://localhost:8080/contacts');
}

module.exports = { single, all, newContact, updateContact, deleteContact };
