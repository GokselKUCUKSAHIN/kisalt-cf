const mongodb = require("mongodb");
require("dotenv").config();
const MONGO_URI = process.env.MONGO_URI;

const client = mongodb.MongoClient;
const uri = MONGO_URI;
const database = "newDB";
const table = "users";

client.connect(uri, (err, client) => {
  if (!!err) {
    return console.log("Database refused to connection.\nDetails:", err.errmsg);
  }
  const db = client.db(database);
  const collection = db.collection(table);
  const query = {};
  const cursor = collection.find(query);
  cursor.forEach(doc => console.log(doc), error => client.close());
});