const mongodb = require("mongodb");
require("dotenv").config();
const MONGO_URI = process.env.MONGO_URI;

const client = mongodb.MongoClient;
const uri = MONGO_URI;

client.connect(uri, (err, client) => {
  const db = client.db("newDB");
  const collection = db.collection("users");
  const query = {};
  const cursor = collection.find(query);
  cursor.forEach(doc => console.log(doc), err => client.close());
});