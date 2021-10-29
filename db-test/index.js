const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://dbAdmin:pass123@mongodbkisaltcf.hkosr.mongodb.net/mongoDbKisaltCf?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});
client.connect(err => {
  const collection = client.db("mon").collection("x").findOne({}, (err, res) => {
    if (err)
      console.log("err:", err);
    else
      console.log(res);
  });
  client.close();
});