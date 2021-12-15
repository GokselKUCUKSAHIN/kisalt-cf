const mongodb = require("mongodb");
const fs = require('fs');
const path = require('path');
require("dotenv").config();

const logs = path.join(__dirname, "logs");
const exist = fs.existsSync(logs);
const MONGO_URI = process.env.MONGO_URI;

const client = mongodb.MongoClient;
const uri = MONGO_URI;
const database = "epatch";
const table = "results";

client.connect(uri, (err, client) => {
  if (!!err) {
    return console.log("Database refused to connection.\nDetails:", err.errmsg);
  }
  const db = client.db(database);
  const collection = db.collection(table);
  if (!!exist) {
    fs.readdir(logs, (err, files) => {
      if (!!err) return console.error("Error:", err);
      const jsonArray = [];
      files.forEach(file => {
        const currentFilePath = path.join(logs, file);
        const currentJson = JSON.parse(fs.readFileSync(currentFilePath, "utf8"));
        jsonArray.push(currentJson);
      });
      collection.insertMany(jsonArray);
    });
  }
  client.close();
});


