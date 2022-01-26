import {mongoDbDriverFactory, using} from "moosedb";

class Main {
  static async main() {
    using(await mongoDbDriverFactory("mongodb://superUser:pass123@13.48.27.102:27017"), async driver => {
      const collection = await driver.db("compas").get("hello");
      console.log(await collection.insertOne({id: 42, status: "OK"}));
    });
  }
}

Main.main();